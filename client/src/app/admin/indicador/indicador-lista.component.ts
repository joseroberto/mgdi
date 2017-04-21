import {Component, OnInit, NgZone} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {WindowRef} from './WindowRef';

@FadeInTop()
@Component({
  selector: 'app-projects',
  templateUrl: './indicador-lista.component.html',
})
export class IndicadorListaComponent implements OnInit {

  constructor(private zone:NgZone, private winRef: WindowRef) {
    winRef.nativeWindow.angularComponentRef = {
      zone: this.zone,
      componentFn: (value) => this.teste(value),
      component: this
    };
  }

  ngOnInit() {
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
  ],
  "order": [[1, 'asc']]
}

teste(value){
  console.log('Testando 1,2,3', value);
}

  public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody>
            <tr>
                <td style="width:100px">Nome:</td>
                <td>${d.descricao}</td>
            </tr>
            <tr>
                <td></td>
                <td>
                  <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Apaga</button>
                  <button onclick="window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.teste('1');})">Teste</button>
                  <a href="/#/admin/indicadornovo" class='btn btn-xs btn-success pull-right'">Grava</a
                </td>
            </tbody>
        </table>`
  }

btnClick(){
  console.log('Funciona');
}

}
