import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';
import {NotificationService} from "../shared/utils/notification.service";
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  env: any = environment;
  
  constructor(private router: Router, private auth: AuthenticationService, private notificationService:NotificationService) { }

  ngOnInit() {
    this.auth.logout();
  }

  login(){
    this.auth.login(this.model.email, this.model.senha).subscribe(resp =>{
      console.log("Sucesso no login",resp);
      //TODO: Armazena o token
      this.router.navigate(['/admin'], {queryParams: {q:'login'}});
    },err =>{
      console.log("Erro no login", err);
      if (err.status == 403){
        this.notificationService.smallBox({
          title: "Erro",
          content: "Login negado por email ou senha inválida.",
          color: "#C46A69",
          iconSmall: "fa fa-warning shake animated",
          timeout: 4000
        });
      }else{
        this.notificationService.smallBox({
          title: "Erro",
          content: "Erro no acesso ao login. Tente mais tarde!",
          color: "#C79121",
          iconSmall: "fa fa-shield fadeInLeft animated",
          timeout: 4000
        });
      }
    });
  }

}
