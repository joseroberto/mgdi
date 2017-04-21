import {Component, NgZone, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

import { IndicadorService, UtilService } from '../../services/index';
import {WindowRef} from './WindowRef';

@FadeInTop()
@Component({
  selector: 'app-projects',
  templateUrl: './indicador-lista.component.html',
})
export class IndicadorListaComponent {

  @ViewChild('listaIndicadores') tabelaIndicadores

  constructor(private zone:NgZone, private winRef: WindowRef,
    private indicadorService:IndicadorService,
    private util:UtilService,
    private router:Router) {
    winRef.nativeWindow.angularComponentRef = {
      zone: this.zone,
      componentFn: (value) => this.apagaIndicador(value),
      component: this
    };
    winRef.nativeWindow.angularComponentRef = {
      zone: this.zone,
      componentFn: (value) => this.editaIndicador(value),
      component: this
    };
  }


  public options = {
  "ajax": {"url": 'http://localhost:8000/api/indicador', "dataSrc":'indicadores'},
  "iDisplayLength": 15,
  "oLanguage": {"sUrl": 'assets/api/langs/datatable-br.json'},
  "columns": [
    {
      "class": 'details-control',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    },
    {"data": "descricao"},
    {"data": "codigo"}
  ],
  "order": [[1, 'asc']]
}

  apagaIndicador(codigo:string){
      this.indicadorService.erase(codigo).subscribe(resp=>{
        console.log(resp);
        if(!resp.codret){
          this.util.msgSucessoDelete(resp.mensagem);
          this.tabelaIndicadores.refresh();
        }else
          this.util.msgErro(resp.mensagem);
      }, err=>{ this.util.msgErroInfra(JSON.parse(err._body).message)});
  }

  editaIndicador(codigo:string){

      this.router.navigate(['/admin/indicadornovo',codigo]);
  }

  public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody>
            <tr>
                <td>Código:</td>
                <td>${d.codigo}</td>
            </tr>
            <tr>
                <td style="width:100px">Nome:</td>
                <td>${d.descricao}</td>
            </tr>
            <tr>
                <td></td>
                <td>
                  <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'
                    onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaIndicador('${d.codigo}');})">
                    Apaga
                  </button>
                  <button class='btn btn-xs btn-info pull-right'
                    onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaIndicador('${d.codigo}');})">
                    Edita
                  </button>
                </td>
            </tbody>
        </table>`
  }

}
