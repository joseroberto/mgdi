import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'app-home',
  templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private notificationService: NotificationService) { }

  ngOnInit() {
    //console.log('Teste', this.route.snapshot.queryParams);
    if(this.route.snapshot.queryParams['q']==='login'){
      this.notificationService.smallBox({
        title: "Sucesso",
        content: "Login efetuado!",
        color: "#739E73",
        iconSmall: "fa fa-thumbs-up bounce animated",
        timeout: 4000
      });
    }
  }


}
