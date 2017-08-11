import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from "../../shared/utils/notification.service";
import {IndicadorService} from '../../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

  private totalIndicadores:number=0;
  private listaIndicadores:any[]=[];

  constructor(private route: ActivatedRoute, private notificationService: NotificationService,
      private indicadorService:IndicadorService) { }

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
      this.loadIndicadorPorUnidade();
    }
  }

  loadIndicadorPorUnidade(){
    this.totalIndicadores=0;
    this.listaIndicadores=[];
    this.indicadorService.getCountPorUnidade().subscribe(resp=>{
      console.log('Unidades',resp.unidades);
      resp.unidades.forEach(item=>{
          let obj={};
          obj['label'] = item.sigla;
          obj['value'] = item.numero_indicadores;
          this.totalIndicadores = this.totalIndicadores + (+obj['value']);
          this.listaIndicadores.push(obj);
      });
    });
  }

}
