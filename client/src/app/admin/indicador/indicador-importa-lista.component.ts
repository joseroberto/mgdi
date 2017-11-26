import {Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

import { IndicadorService, UtilService } from '../../services/index';
import {WindowRef} from '../WindowRef';

@FadeInTop()
@Component({
  selector: 'app-projects',
  templateUrl: './indicador-importa-lista.component.html',
})

export class IndicadorImportaListaComponent implements OnInit {
    @ViewChild('listaIndicadores') private tabelaIndicadores;
    private titulo:string='';
    private sub: any;
    private tipo: number;
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
      {"data": "titulo"},
      {"data": "codigo"},
      {"data": "PeriodicidadeAtualizacao.descricao"},
      {"data": "ultima_atualizacao"}
    ],
    "order": [[1, 'asc']]
    }

    constructor(private route: ActivatedRoute,private zone:NgZone, private winRef: WindowRef,
      private indicadorService:IndicadorService,
      private util:UtilService,
      private router:Router) {
      }

    ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
          this.tipo = params['tipo'];
          this.titulo = this.tipo==3?"Importação":"Formulário";
      });

    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

    detailsFormat(d):string {
      return "";
    }

    getIndicadores(){
      this.tabelaIndicadores.clear();
      this.indicadorService.getPorTipoConsulta(this.tipo).subscribe((resp)=>{
        console.log('Resultado',resp);
        if(resp.count > 0){
          resp.rows.forEach(item => {
              this.tabelaIndicadores.addRow(item);
          });
          this.tabelaIndicadores.draw();
        }
      } , err => this.util.msgErroInfra(err));
    }

}
