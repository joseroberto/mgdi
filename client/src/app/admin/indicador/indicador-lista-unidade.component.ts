import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {ModalDirective} from "ngx-bootstrap";

import { UnidadeService, UtilService } from '../../services/index';

@FadeInTop()
@Component({
  selector: 'app-projects',
  templateUrl: './indicador-lista-unidade.component.html',
})
export class IndicadorListaUnidadeComponent implements OnInit, AfterViewInit {

  listaUnidades:Array<Object>=[];
  estilos=['font-sm bg-color-blue txt-color-white','bg-color-green txt-color-white', 'bg-color-magenta txt-color-white'];
  icones=[`<i class="fa fa-institution fa-lg"></i>`,`<i class="fa  fa-building fa-lg"></i>`,`<i class="fa fa-deviantart fa-lg"></i>`];

  @ViewChild('lgModal') public lgModal:ModalDirective;

  public showChildModal():void {
    this.lgModal.show();
  }

  public hideChildModal():void {
    this.lgModal.hide();
  }

  constructor(private unidadeService:UnidadeService, private util:UtilService){
  }

  ngOnInit() {

  }

  changeLstener(payload) {
    console.log('change payload', payload)
  }

  ngAfterViewInit() {
    this.unidadeService.getUnidadesHierarchical().subscribe(resp=>{
      if(resp.unidades){
        console.log('Unidades', resp.unidades);
        this.listaUnidades = [];
        resp.unidades.forEach((item)=>{
          this.listaUnidades.push(this.loadItem(item));
        });
      }
    }, err=>{ this.util.msgErroInfra(JSON.parse(err._body).message)}
    );
  }

  loadItem(item){
    let obj = {"content": `<span class=\" ${this.estilos[item.nu_nivel-1]}\" style=\"line-height: 10px\">
      <span style="vertical-align: middle"> ${this.icones[item.nu_nivel-1]} ${item.sigla} - ${item.nome}</span>
      <span style="vertical-align: middle">` +
      (item.children? "":`<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'
        onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaIndicador('${item.codigo}');})">
        <i class="fa fa-times "></i>&nbsp;Apaga</button>`)
      + `<button class='btn btn-xs btn-info pull-right'
        onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaIndicador('${item.codigo}');})">
        <i class="fa fa-pencil "></i>&nbsp;Edita
      </button>
      <button class='btn btn-xs btn-warning pull-right' style='margin-left:5px'
        onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaIndicador('${item.codigo}');})">
        <i class="fa fa-plus"></i>&nbsp;Inclui
      </button>
      </span>
    </span>`};
    if(item.children){
      obj['expanded'] = false;
      obj['children'] = [];
      item.children.forEach((itemFilho)=>{
        obj['children'].push(this.loadItem(itemFilho));
      });
    }
    return obj;
  }
}
