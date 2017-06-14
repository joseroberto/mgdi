import { Injectable } from '@angular/core';
import { NotificationService } from "../shared/utils/notification.service";

@Injectable()
export class UtilService {
  constructor(private notificationService:NotificationService) {
  }

  msgSucesso(mensagem:string){
    this.notificationService.smallBox({
      title: "Sucesso",
      content: mensagem,
      color: "#739E73",
      iconSmall: "fa fa-thumbs-up bounce animated",
      timeout: 4000
    });
  }

  msgErro(mensagem:string){
    this.notificationService.smallBox({
      title: "Erro",
      content: mensagem,
      color: "#C46A69",
      iconSmall: "fa fa-warning shake animated",
      timeout: 4000
    });
  }

  msgErroInfra(err:any){
    console.log(err);
    let mensagem:string = err;
    this.notificationService.smallBox({
      title: "Erro na Infraestrutura",
      content: mensagem,
      color: "#C79121",
      iconSmall: "fa fa-shield fadeInLeft animated",
      timeout: 4000
    });
  }

  msgSucessoDelete(mensagem:string){
    this.notificationService.smallBox({
      title: "Registro Apagado",
      content: mensagem,
      color: "#DB4A67",
      iconSmall: "fa fa-warning fadeInLeft animated",
      timeout: 4000
    });
  }

  msgSucessoEdicao(mensagem:string){
    this.notificationService.smallBox({
      title: "Registro Atualizado",
      content: mensagem,
      color: "#002E70",
      iconSmall: "fa fa-warning fadeInLeft animated",
      timeout: 4000
    });
  }

  msgAlerta(mensagem:string, evento:string){
    this.notificationService.smallBox({
      title: "Ding Dong!",
      content: mensagem + " <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Sim</a> <a href-void class='btn btn-danger btn-sm'>Não</a></p>",
      color: "#296191",
      //timeout: 8000,
      icon: "fa fa-bell swing animated"
    });
  }
}
