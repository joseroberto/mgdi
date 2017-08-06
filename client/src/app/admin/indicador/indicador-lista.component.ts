import {Component, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

import { IndicadorService, UtilService } from '../../services/index';
import {WindowRef} from './WindowRef';
import { environment } from '../../../environments/environment';

@FadeInTop()
@Component({
  selector: 'app-projects',
  templateUrl: './indicador-lista.component.html',
})
export class IndicadorListaComponent  {

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
  "iDisplayLength": 15,
  "oLanguage": {"sUrl": 'assets/api/langs/datatable-br.json'},
  "columns": [
    {
      "class": 'details-control',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    },
    {"data": "titulo"},
    {"data": "codigo"},
    {"data": "ativo", render: function(data, type, full, meta){
      if(type == "display"){
        return data? "<span class='label label-success'>ATIVO</span>":"<span class='label label-default'>INATIVO</span>";
      }
      return data;
    }},
    {"data": "privado", render: function(data, type, full, meta){
      if(type == "display"){
        return data? "<span class='label label-warning'>PRIVADO</span>":"<span class='label label-primary'>PÚBLICO</span>";
      }
      return data;
    }}
  ],
  "order": [[1, 'asc']]
}

getIndicadores(){
  this.tabelaIndicadores.clear();
  this.indicadorService.getAll().subscribe((resp)=>{
    //console.log(resp);
    if(resp.count > 0){
      resp.rows.forEach(item => {
          this.tabelaIndicadores.addRow(item);
      });
      this.tabelaIndicadores.draw();
    }
  } , err => this.util.msgErroInfra(err));
}

apagaIndicador(codigo:string){
      this.indicadorService.delete(codigo).subscribe(resp=>{
        console.log(resp);
        if(!resp.codret){
          this.util.msgSucessoDelete(resp.mensagem);
          this.tabelaIndicadores.refresh();
        }else
          this.util.msgErro(resp.mensagem);
      }, err=>{ this.util.msgErroInfra(JSON.parse(err._body).message)});
}

editaIndicador(codigo:string){
      this.router.navigate(['/admin/indicador', codigo]);
}

detailsFormat(d) {
    let tags:string='';
    if(d.Tags.length){
      tags += '<tr><td>Marcador(es):</td><td colspan="5">';
      d.Tags.forEach(item=>{
        tags+=`<span class="badge badge-info">${item.descricao}</span>`;
      });
      tags += '</td></tr>';
    }

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody>
            <tr>
                <td style="width:100px">Nome:</td>
                <td colspan="5">${d.titulo}</td>
            </tr>
            <tr>
                <td>Descrição:</td>
                <td colspan="5">${d.descricao}</td>
            </tr>
            <tr>
                <td>Conceito:</td>
                <td colspan="5">${d.conceituacao || ''}</td>
            </tr>
            <tr>
                <td >Un. de medida: </td><td>${d.UnidadeMedida.descricao}</td>
                <td>Periodicidade de atualização: &nbsp;${d.PeriodicidadeAtualizacao.descricao}</td>
                <td>Periodicidade de avaliação: &nbsp;${d.PeriodicidadeAvaliacao.descricao}</td>
                <td colspan="2">Periodicidade de monitoramento: &nbsp;${d.PeriodicidadeMonitoramento.descricao}</td>
            </tr>
            ${tags}
            <tr>
                <td>Tipo</td>
                <td colspan="5">
                 ${d.acumulativo? "<span class='label label-info'>ACUMULATIVO</span>":"<span class='label label-default'>NÃO ACUMULATIVO</span>"}
                  <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'
                    onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaIndicador('${d.codigo}');})">
                    <i class="fa fa-times "></i>&nbsp;Apaga
                  </button>
                  <button class='btn btn-xs btn-info pull-right'
                    onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaIndicador('${d.codigo}');})">
                    <i class="fa fa-pencil "></i>&nbsp;Edita
                  </button>
                </td>
            </tbody>
        </table>`
  }
}
