import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';
import {WindowRef} from './WindowRef';

declare var $: any;
/**
 * Componente para mostrar dados de resultado de indicadores.
 */
@Component({
    selector: 'resultset',
    template: `
    <div class="row">
        <div class="col-md-12">
          <table id="lista" class="responsive table table-striped table-bordered table-hover" width="100%">
          </table>
        </div>
    </div>`})
export class ResultsetComponent implements OnChanges, OnInit {
    @Input() codigo: string;

    private _dataTable:any;
    private enable:boolean = false;

    constructor(private consulta:ConsultaService){}

    ngOnInit(){
      Promise.all([
        System.import('script-loader!smartadmin-plugins/datatables/datatables.min.js'),
      ]).then(()=>{
        this.enable = true;
      });
    }

    ngOnChanges(changes: SimpleChanges) {
      if(changes.codigo.currentValue){
        this.loadData(changes.codigo.currentValue);
      }
    }

    loadData(codigo:string){
      //this._dataTable.row.add({'uf': 'AC', 'local': 'Teste'});
      this.consulta.search(codigo,null,null, 'TAB').then((resp)=>{
          console.log('Resultset',resp);
          if(this.enable){
            this.render(resp.resultset);
          }
      });
    }

    render(itens){
      let columns:Object[] = [
        {"title":'UF',"data": "uf"},
        {"title":'Município',"data": "local"}
      ];
      let cod = this.codigo.toLowerCase();

      Object.keys(itens[0]).forEach((key)=>{
          //console.log(key, typeof(itens[0][key]));
          if(typeof(itens[0][key])=='object'){
              columns.push({"title":key, "data": key, "render":
              function ( data, type, row ) {
                if(!data)
                  return '';
                if(type === 'display'){
                    return data[cod];
                }else if(type === 'sort'){
                    return data[cod];
                }else{
                    return data;
                }
              }
            });
          }
      });

      this._dataTable = $('#lista').DataTable({
        "iDisplayLength": 50,
        "bLengthChange": false,
        "oLanguage": {"sUrl": 'assets/api/langs/datatable-br.json'},
        "columns": columns,
        "order": [[0, 'asc']]
        });
        this._dataTable.rows.add(itens);
        this._dataTable.draw();
    }
}
