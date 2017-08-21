import { Component, ViewChild } from '@angular/core';
import { TagCategoriaService, UtilService } from '../../services/index';

@Component({
  templateUrl: 'tag.component.html',
})
export class TagComponent {
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
  @ViewChild('listaTag') tabelaTags;
  constructor(private tagService:TagCategoriaService, private util:UtilService) {  }


  private getTags(){
    this.tabelaTags.clear();
    this.tagService.getAll().subscribe((resp)=>{
      resp.tag_categorias.forEach(item=>{
        this.tabelaTags.addRow(item);
      });
      this.tabelaTags.draw();
    }, err=>this.util.msgErroInfra(err));
  }
}
