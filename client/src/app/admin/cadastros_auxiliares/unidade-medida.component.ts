import { Component, ViewChild } from '@angular/core';
import { UnidadeMedidaService, UtilService } from '../../services/index';

@Component({
  templateUrl: 'unidade-medida.component.html',
})
export class UnidadeMedidaComponent {
  public options = {
  "iDisplayLength": 15,
  "oLanguage": {"sUrl": 'assets/api/langs/datatable-br.json'},
  "rowId": 'codigo',
  "searching": true,
  "columns": [
    {
      "class": 'details-control',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    },
    {"data": "descricao"},
  ],
  "order": [[1, 'asc']]
  }
  @ViewChild('listUnidadeMedida') tabelaUnidades;
  constructor(private unidadeMedidaService:UnidadeMedidaService, private util:UtilService) {  }


  private getUnidades(){
    this.tabelaUnidades.clear();
    this.unidadeMedidaService.getAll().subscribe((resp)=>{
      resp.unidades.forEach(item=>{
        this.tabelaUnidades.addRow(item);
      });
      this.tabelaUnidades.draw();
    }, err=>this.util.msgErroInfra(err));
  }
}
