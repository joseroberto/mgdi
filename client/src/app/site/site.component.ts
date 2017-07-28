import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../shared/animations/fade-in-top.decorator";
import { IndicadorService, UtilService } from '../services/index';

@FadeInTop()
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
})
export class SiteComponent implements OnInit {
  private listaIndicadores:any[];
  private listaIndicadorPorUnidade:any[];
  private listaIndicadorPorTag:any[];
  private page: number =1;
  private total: number = 0;
  private itensPorPagina: number = 20;
  private pesquisa:Object = {};
  private minha_pesquisa:string = '';

  buscaDados(){
    this.pesquisa['query'] = this.minha_pesquisa;
    this.pageChanged(1);
  }

  constructor(private indicadorService:IndicadorService) { }

  ngOnInit() {
    if(localStorage.getItem('pesquisa_site')){
      this.pesquisa = JSON.parse(localStorage.getItem('pesquisa_site'));
    }else{
      this.pesquisa = {};
    }

    this.page  = localStorage.getItem('pagina_site')? +(localStorage.getItem('pagina_site')):1;

    this.pageChanged(this.page);
    this.loadIndicadorPorUnidade();
    this.loadIndicadorPorTag();
  }

  pageChanged(pagina:number){
    this.loadIndicador(pagina);
  }

  loadIndicador(pagina:number){
    this.page = pagina;
    var offset = (pagina-1) * this.itensPorPagina;

    // Guarda pesquisa
    localStorage.setItem('pesquisa_site', JSON.stringify(this.pesquisa));
    // Guarda pagina
    localStorage.setItem('pagina_site', String(this.page));

    console.log('Armazenado:', localStorage.getItem('pesquisa_site'));
    this.indicadorService.getAll(this.itensPorPagina, offset, this.formataPesquisa(this.pesquisa)).subscribe(resp=>{
        this.total = resp.count;
        this.listaIndicadores=resp.rows;
    });
  }

  formataPesquisa(objeto: Object):string{
      let resposta:string='';
      if ('query' in objeto){
        resposta+=`query=${objeto['query']}&`;
      }
      if ('tag' in objeto){
        resposta+=`tag=${objeto['tag'][0]}&`;
      }
      if ('unidade' in objeto){
        resposta+=`secretaria=${objeto['unidade'][0]}&`;
      }
      return resposta;
  }

  formataTela(objeto:Object):string{
    let resposta:string='';

    if ('query' in objeto){
      resposta+=`<span class="badge bg-color-greenLight">${objeto['query']}</span>&nbsp;`;
    }
    if ('tag' in objeto){
      resposta+=`<span class="badge bg-color-orange">${objeto['tag'][1]}</span>&nbsp;`;
    }
    if ('unidade' in objeto){
      resposta+=`<span class="badge bg-color-default">${objeto['unidade'][1]}</span>&nbsp;`;
    }
    return resposta;
  }

  formataBadgesTela(label:string, campo:string, color:string, array:any[]):string{
    let resposta:string='';

    array.forEach((item)=>{
      resposta+=`<span class="badge bg-color-${color}">${item[campo]}</span>&nbsp;`;
    });
    if(resposta){
      resposta= '<h4><small class="font-xs"><i>'+label+'</i></small>&nbsp;'+resposta+'</h4>';
    }
    return resposta;
  }

  isEmpty(objeto:Object){
    return Object.keys(objeto).length==0;
  }

  loadIndicadorPorUnidade(){
    this.indicadorService.getCountPorUnidade().subscribe(resp=>{
      //console.log('Unidades',resp.unidades);
      this.listaIndicadorPorUnidade = resp.unidades;
    });
  }

  loadIndicadorPorTag(){
    this.indicadorService.getCountPorTag().subscribe(resp=>{
      //console.log('Tags',resp.tags);
      this.listaIndicadorPorTag = resp.tags.slice(0,9);
    });
  }

  buscaPorTag(codigo:number, sigla:string){
      this.pesquisa['tag'] = [codigo, sigla];
      this.pageChanged(1);
  }

  buscaPorUnidade(codigo:number, nome:string){
      this.pesquisa['unidade'] = [codigo,nome];
      this.pageChanged(1);
  }

  dateFormat(d) {
    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
  }

  limpaFiltro(){
    this.pesquisa = {};
    this.pageChanged(1);
  }

}
