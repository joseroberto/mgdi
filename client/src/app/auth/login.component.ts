import { Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {ModalDirective} from "ngx-bootstrap";

import { AuthenticationService, UtilService } from '../services/index';
import { NotificationService } from "../shared/utils/notification.service";
import { environment } from '../../environments/environment';
import { UnidadeService } from '../services/index';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  env: any = environment;

  @ViewChild('complementoModal') private categoriaAnaliseModal:ModalDirective;
  private colecaoUnidades:any[] = [];
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
    private unidadeService:UnidadeService, private util:UtilService) { }

  ngOnInit() {
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

  onSubmit(){
    console.log('Submetido');
  }

}
