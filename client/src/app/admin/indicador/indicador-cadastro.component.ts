import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ClassificacaoIndicadorService, IndicadorService, UnidadeMedidaService, PeriodicidadeService, AreaService, UtilService } from '../../services/index';

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './indicador-cadastro.component.html',
})
export class IndicadorCadastroComponent implements OnInit {
  private currenttab = 't1';

  colecaoClassificacao:any[] = [];
  colecaoPeriodicidade:any[] = [];
  colecaoUnidadeMedida:any[] = [];

  constructor(private classificacaoIndicadorService:ClassificacaoIndicadorService,
      private indicadorService:IndicadorService,
      private periodicidadeService:PeriodicidadeService,
      private areaService:AreaService,
      private unidadeMedidaService:UnidadeMedidaService,
      private util:UtilService) {}

  ngOnInit() {
    this.classificacaoIndicadorService.getAll().subscribe(resp => {
        this.colecaoClassificacao = resp.classificacoes;
    }, err => this.trataErro(err));
    this.periodicidadeService.getAll().subscribe(resp => {
        this.colecaoPeriodicidade = resp.periodicidades;
    }, err => this.trataErro(err));
    this.unidadeMedidaService.getAll().subscribe(resp => {
        this.colecaoUnidadeMedida = resp.unidades;
    }, err => this.trataErro(err));
  }

  onSubmit(form){
      form.value.codigo = form.value.codigo.toUpperCase(); //TODO: Para reforcar... nao entendo pq a ultima letra fica minusculo no javascript/tela.
      this.indicadorService.create(form.value).subscribe(resp=>{
        if(resp.codret==0){
          this.util.msgSucesso(resp.mensagem);
        }else{
          this.trataErro(resp);
        }
        form.reset();
      }, err=>this.trataErro(err));
  }

  trataErro(err){
    console.log(err);
    let mensagem:string='';
    if(err.status!=200){
      mensagem = JSON.parse(err._body).message;
    }else{
      mensagem = err.mensagem;
    }
    this.util.msgErro(mensagem);
  }
}
