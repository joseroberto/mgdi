import { Component, OnInit, OnDestroy } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ClassificacaoIndicadorService, IndicadorService, UnidadeMedidaService, PeriodicidadeService, AreaService, UtilService } from '../../services/index';
import { ActivatedRoute } from '@angular/router';

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './indicador-cadastro.component.html',
})
export class IndicadorCadastroComponent implements OnInit, OnDestroy {
  private currenttab = 't1';

  private tituloForm = 'Novo Indicador';
  private breadcrumb = [];
  private sub: any;
  private flag_update:boolean = false;
  private indicador = {
      codigo: '', descricao: ''
  };

  colecaoClassificacao:any[] = [];
  colecaoPeriodicidade:any[] = [];
  colecaoUnidadeMedida:any[] = [];

  constructor(private classificacaoIndicadorService:ClassificacaoIndicadorService,
      private indicadorService:IndicadorService,
      private periodicidadeService:PeriodicidadeService,
      private areaService:AreaService,
      private unidadeMedidaService:UnidadeMedidaService,
      private util:UtilService,
      private route: ActivatedRoute) {
        this.breadcrumb = ['Indicador', 'Novo'];
      }

  ngOnInit() {
    this.flag_update = false;
    this.sub = this.route.params.subscribe(params => {
        this.indicador.codigo = params['codigo'];
        if(this.indicador.codigo){
          this.indicadorService.get(this.indicador.codigo).subscribe(resp=>{
              this.tituloForm = this.indicador.codigo;
              this.breadcrumb = ['Indicador', this.indicador.codigo];
              this.indicador = Object.assign(this.indicador, resp);
              this.flag_update = true;
            });
        }
    });
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(form){
      if(this.flag_update){
        this.indicador = Object.assign(this.indicador, form.value)
        console.log(form.value, this.indicador);
        this.indicadorService.update(this.indicador).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucessoEdicao(resp.mensagem);
          }else{
            this.trataErro(resp);
          }
          form.reset();
        }, err=>this.trataErro(err));
      }else{
        form.value.codigo = form.value.codigo.toUpperCase(); //Para reforcar... nao entendo pq a ultima letra fica minusculo no javascript/tela.
        this.indicadorService.create(form.value).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.trataErro(resp);
          }
          form.reset();
        }, err=>this.trataErro(err));
      }
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
