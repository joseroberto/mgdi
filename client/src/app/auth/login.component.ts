import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';
import {NotificationService} from "../shared/utils/notification.service";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private auth: AuthenticationService, private notificationService:NotificationService) { }

  ngOnInit() {
  }

  login(){
    console.log('Login', this.model);
    this.auth.login(this.model.email, this.model.senha).subscribe(resp =>{
      console.log("Status",resp);
      //TODO: Armazena o token
      this.router.navigate(['/admin?q=login']);
    },err =>{
      console.log(err);
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
