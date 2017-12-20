import { Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {ModalDirective} from "ngx-bootstrap";

import { AuthenticationService, UtilService, UnidadeService } from '../services/index';
import { User, UnidadeResponsavel } from '../model/index';
import { NotificationService } from "../shared/utils/notification.service";
import { environment } from '../../environments/environment';
declare var $: any;

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  env: any = environment;
  private newuser: User;

  @ViewChild('complementoModal') private categoriaAnaliseModal:ModalDirective;
  private colecaoUnidades:UnidadeResponsavel[] = [];
  private   validatorOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      nome: {
        validators: {
          notEmpty: {
            message: 'Nome é obrigatório'
          }
        }
      },
      cpf: {
        validators: {
          notEmpty: {
            message: 'CPF é obrigatório'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Email é obrigatório'
          }
        }
      },
      celular: {
        validators: {
          notEmpty: {
            message: 'Número de telefone celular é obrigatório'
          }
        }
      },
      sexo: {
        validators: {
          notEmpty: {
            message: 'Informação de sexo é obrigatória'
          }
        }
      }
    }
  };

  constructor(private router: Router, private auth: AuthenticationService,
    private unidadeService:UnidadeService, private util:UtilService) {
    }

  ngOnInit() {
    this.newuser = new User();

    this.unidadeService.getAll().subscribe(resp=>{
        this.colecaoUnidades = resp.unidades;
    }, err => this.util.msgErroInfra(err));
    this.auth.logout();
  }

  login(){
    this.auth.login(this.model.usuario, this.model.senha).subscribe(resp =>{
      console.log("Sucesso no login",resp);
      this.router.navigate(['/admin'], {queryParams: {q:'login'}});
    },err =>{
      console.log("Erro no login", err);
      let mensagem = JSON.parse(err._body);
      if ([403,500].indexOf(err.status)> -1){
        this.util.msgErro(mensagem.message);
      }else{
        this.util.msgErroInfra("Erro no acesso ao login. Tente mais tarde!");
      }
    });
  }


  private onSubmit(){
    // Campos com controle de mascara não atualiza a model do angular2.
    this.newuser.celular= $('#celular').val();
    this.newuser.cpf= $('#cpf').val();
    this.newuser.telefone= $('#telefone').val();
    this.newuser.ramal= $('#ramal').val();
    this.newuser.unidade = JSON.parse($('#unidade').val());
    this.newuser.sexo = $("input[type='radio'][name='sexo']:checked").val();
    //

    console.log('Submetido', this.newuser);
  }

}
