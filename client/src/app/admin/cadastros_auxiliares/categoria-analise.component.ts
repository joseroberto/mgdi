import { Component, ViewChild } from '@angular/core';
import { CategoriaAnaliseService, UtilService } from '../../services/index';

@Component({
  templateUrl: 'categoria-analise.component.html',
})
export class CategoriaAnaliseComponent {
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
    {"data": "codigo"},
    {"data": "titulo"},
  ],
  "order": [[1, 'asc']]
  }
  constructor(private categoriaAnaliseService:CategoriaAnaliseService, private util:UtilService) {  }
  @ViewChild('listaCategorias') tabelaCategorias;

  private getCategorias(){
    this.tabelaCategorias.clear();
    this.categoriaAnaliseService.getAll().subscribe((resp)=>{
      resp.categorias_analise.forEach(item=>{
        console.log(item);
        this.tabelaCategorias.addRow(item);
      });
      this.tabelaCategorias.draw();
    }, err=>this.util.msgErroInfra(err));
  }

  private detailsFormat(d) {
      let strCategorias:string='';
      d.Itens.forEach(item => {
        strCategorias += `<tr>
                          <td style="width:100px">&nbsp;</td>
                          <td>${item.codigo}</td>
                          <td>${item.descricao}</td>
                      </tr>`;

      });


      return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
              <tbody>
              <tr><td colspan="3">Perfis:</td></tr>
              ${strCategorias}
              </tbody>
          </table>`
    }

}
