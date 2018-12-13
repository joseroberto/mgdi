import { Component, ViewChild } from '@angular/core';
import { UsuarioService, UtilService } from '../../services/index';
import _  from 'lodash';

@Component({
  templateUrl: 'usuario.component.html',
})
export class UsuarioComponent {
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
    {"data": "nome"},
    {"data": "cpf"},
    {"data": "email"},
    {"data": "ramal"},
    {"data": "celular"},
    {"data": "dt_atualizacao", render: function(data, type, full, meta){
      if(type == "display"){
        var dt = new Date(data)
        return dt.toLocaleDateString('pt-BR') + ' - ' +dt.toLocaleTimeString('pt-BR');
      }
      return data;
    }},
  ],
  "order": [[1, 'asc']]
  }
  @ViewChild('listaUsuario') tabelaUsuarios;

  constructor(private usuarioService:UsuarioService, private util:UtilService) {  }


  private getUsuarios(){
    this.tabelaUsuarios.clear();
    this.usuarioService.getAll().subscribe((resp)=>{
      resp.users.forEach(item=>{
        console.log(item);
        this.tabelaUsuarios.addRow(item);
      });
      this.tabelaUsuarios.draw();
    }, err=>this.util.msgErroInfra(err));
  }

  private detailsFormat(d) {
      let strPerfil:string='';
      let listaPerfil = {ADM: 'Administrativo', ANA: 'Analista', USR: 'Usuário'};
      // debugger;
      // d.Perfil.forEach(item => {
      //   strPerfil += `<tr>
      //                     <td style="width:100px">&nbsp;</td>
      //                     <td style="width:100px">${item}</td>
      //                     <td>${listaPerfil[item]}</td>
      //                 </tr>`;

      // });

      var convertObjectToString = (obj:object):string=>{
          let str:string = ''
          _.forOwn(obj, (v,k) =>{

            if( _.isObject(v) ){
              str += `<p><b>${k}</b>:<blockquote style='font-size:12px;'>`
              str += convertObjectToString(v)
              str += `</blockquote></p>`

            }else{
              str += `<p><b>${k}</b>:${v}</p>`
            }

          } )
          return str;
    }

     strPerfil = convertObjectToString(d) ;


      return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
              <tbody>
              <tr><td style='font-size:12px;'>
              ${strPerfil}
              </td></tr>
              </tbody>
          </table>`
    }

}
