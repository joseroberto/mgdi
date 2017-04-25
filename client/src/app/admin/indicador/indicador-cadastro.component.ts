import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ClassificacaoIndicadorService, IndicadorService, UnidadeMedidaService, PeriodicidadeService, AreaService, UtilService } from '../../services/index';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './indicador-cadastro.component.html',
  styles:['div.note-editable.panel-body{height: 180px;}']
})
export class IndicadorCadastroComponent implements OnInit, OnDestroy {
  private currenttab = 't1';
  private msg_padrao = 'Não há dados cadastrados';
  private tituloForm = 'Novo Indicador';
  private titulo = 'Novo Indicador';
  private breadcrumb = [];
  private sub: any;
  private flag_update:boolean = false;
  private indicador = {
      codigo: '', descricao: '', metodo_calculo:'', conceituacao:'', interpretacao:'', usos:'',
      limitacoes:'', notas:'', observacoes:''
  };

  colecaoClassificacao:any[] = [];
  colecaoPeriodicidade:any[] = [];
  colecaoUnidadeMedida:any[] = [];

  private isEditConceituacao:false;
  private isEditInterpretacao:false;
  private isEditUsos:false;
  private isEditLimitacoes:false;
  private isEditNotas:false;
  private isEditObservacoes:false;

  @ViewChild('conceituacao') conceituacao;
  @ViewChild('interpretacao') interpretacao;
  @ViewChild('usos') usos;
  @ViewChild('limitacoes') limitacoes;
  @ViewChild('notas') notas;
  @ViewChild('observacoes') observacoes;

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
              this.titulo = 'Atualiza ' + this.indicador.codigo;
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

  editConceituacao(flag){
      this.isEditConceituacao = flag;
      let content = this.conceituacao.nativeElement.innerHTML;
      if(flag){
        console.log("Antes", content);
      }else{
        console.log("Depois",content);
      }
  }

  editInterpretacao(flag){
      this.isEditInterpretacao = flag;
      let content = this.interpretacao.nativeElement.innerHTML;
      if(flag){
        console.log("Antes", content);
      }else{
        console.log("Depois",content);
      }
  }

  editUsos(flag){
      this.isEditUsos = flag;
      let content = this.usos.nativeElement.innerHTML;
      if(flag){
        console.log("Antes", content);
      }else{
        console.log("Depois",content);
      }
  }

  editLimitacoes(flag){
      this.isEditLimitacoes = flag;
      let content = this.limitacoes.nativeElement.innerHTML;
      if(flag){
        console.log("Antes", content);
      }else{
        console.log("Depois",content);
      }
  }

  editNotas(flag){
      this.isEditNotas = flag;
      //let content = this.notas.nativeElement.innerHTML;
      if(flag){
        //console.log('Teste', content===this.msg_padrao);
        //if(content===this.msg_padrao){
        //  this.notas.nativeElement.innerHTML = '';
        //}
        //console.log("Antes", content);
        $('.notas').summernote({focus: true, height: 100});
        $('.notas').summernote('code', this.indicador.notas);
      }else{
        this.indicador.notas = $('.notas').summernote('code');
        console.log("Depois",this.indicador.notas);
        $('.notas').summernote('destroy');
      }
  }

  editObservacoes(flag){
      this.isEditObservacoes = flag;
      let content = this.observacoes.nativeElement.innerHTML;
      if(flag){
        console.log("Antes", content);
      }else{
        console.log("Depois",content);
      }
  }

  onSubmit(form){
    console.log('Valor do campo conceituacao', this.conceituacao);
      if(this.flag_update){
        this.indicador = Object.assign(this.indicador, form.value)
        console.log(form.value, this.indicador);
        this.indicadorService.update(this.indicador).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucessoEdicao(resp.mensagem);
          }else{
            this.trataErro(resp);
          }
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
