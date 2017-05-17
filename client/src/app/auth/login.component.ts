import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, UtilService } from '../services/index';
import {NotificationService} from "../shared/utils/notification.service";
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  env: any = environment;

  constructor(private router: Router, private auth: AuthenticationService, private util:UtilService) { }

  ngOnInit() {
    this.auth.logout();
  }

  login(){
      this.auth.login(this.model.email, this.model.senha).subscribe(resp =>{
        console.log("Sucesso no login",resp);
        this.router.navigate(['/admin'], {queryParams: {q:'login'}});
      },err =>{
        console.log("Erro no login", err);
        let mensagem = JSON.parse(err._body);
        if (err.status == 403){
          this.util.msgErro(mensagem.message);
        }else{

          this.util.msgErroInfra("Erro no acesso ao login. Tente mais tarde!");
        }
      });
  }

}
