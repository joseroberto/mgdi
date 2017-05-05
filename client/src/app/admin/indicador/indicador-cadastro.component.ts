import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ClassificacaoIndicadorService, IndicadorService, UnidadeMedidaService,
  PeriodicidadeService, AreaService, UtilService, SecretariaService, TagCategoriaService } from '../../services/index';
import { ActivatedRoute, Router } from '@angular/router';
import '../../extensions/array.extension';

declare var $: any;

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './indicador-cadastro.component.html',
  styles:['div.note-editable.panel-body{height: 180px;}']
})
export class IndicadorCadastroComponent implements OnInit, OnDestroy, AfterViewInit {
  private currenttab = 't1';
  private msg_padrao = 'Não há dados cadastrados';
  private tituloForm = 'Novo Indicador';
  private titulo = 'Novo Indicador';
  private breadcrumb = [];
  private sub: any;
  private flag_update:boolean = false;

  @ViewChild('tags') selectElRef;

  private indicador:{codigo:string, titulo:string, descricao:string, classificacao:number, periodicidade:number, unidade_medida:number,
    metodo_calculo:string, conceituacao:string, interpretacao:string, usos:string,
    limitacoes:string, notas:string, observacoes:string, fonte_dados:string,
    acumulativo: boolean, ativo:boolean, privado:boolean, tags:any[]} = {
      codigo: '', titulo: '', descricao:'', classificacao:null, periodicidade:null, unidade_medida:null, metodo_calculo:'', conceituacao:'', interpretacao:'', usos:'',
      limitacoes:'', notas:'', observacoes:'', fonte_dados:'', acumulativo:false, ativo:true, privado:true, tags:[]
  };

  colecaoClassificacao:any[] = [];
  colecaoPeriodicidade:any[] = [];
  colecaoUnidadeMedida:any[] = [];
  colecaoSecretaria:any[] = [];
  colecaoTagCategoria:any[] = [];

  private isEditConceituacao:false;
  private isEditInterpretacao:false;
  private isEditUsos:false;
  private isEditLimitacoes:false;
  private isEditNotas:false;
  private isEditObservacoes:false;
  private isEditMetodoCalculo:false;
  private isEditFonteDados:false;

  constructor(private classificacaoIndicadorService:ClassificacaoIndicadorService,
      private indicadorService:IndicadorService,
      private periodicidadeService:PeriodicidadeService,
      private areaService:AreaService,
      private unidadeMedidaService:UnidadeMedidaService,
      private secretariaService:SecretariaService,
      private util:UtilService,
      private tagCategoriaService:TagCategoriaService,
      private route: ActivatedRoute,
      private router: Router) {
        this.breadcrumb = ['Indicador', 'Novo'];
      }

  ngOnInit() {
    System.import('script-loader!summernote/dist/summernote.min.js');
    this.flag_update = false;

    this.classificacaoIndicadorService.getAll().subscribe(resp => {
        this.colecaoClassificacao = resp.classificacoes;
    }, err => this.util.msgErroInfra(err));
    this.periodicidadeService.getAll().subscribe(resp => {
        this.colecaoPeriodicidade = resp.periodicidades;
    }, err => this.util.msgErroInfra(err));
    this.unidadeMedidaService.getAll().subscribe(resp => {
        this.colecaoUnidadeMedida = resp.unidades;
    }, err => this.util.msgErroInfra(err));
    this.secretariaService.getAll().subscribe(resp => {
        this.colecaoSecretaria = resp.secretarias;
    }, err => this.util.msgErroInfra(err));
    this.tagCategoriaService.getAll().subscribe(resp => {
        this.colecaoTagCategoria = resp.tag_categorias;
    }, err => this.util.msgErroInfra(err));
  }

  ngAfterViewInit(){
      $('.tags').on('change', (e) => {
        this.indicador.tags=[];
        if(jQuery(e.target).val()){
          jQuery(e.target).val().forEach(
            obj=>{
              console.log('item_obj', obj);
              //console.log('item_tag', this.colecaoTag.find(item=> item.codigo==obj));
              //this.indicador.tags.push(this.colecaoTag.find(item=> item.codigo==obj));
              this.indicador.tags.push(obj);
            });
          }
      });

      this.sub = this.route.params.subscribe(params => {
          this.indicador.codigo = params['codigo'];
          if(this.indicador.codigo){
            this.indicadorService.get(this.indicador.codigo).subscribe(resp=>{
                console.log('Registro em edicao:', this.indicador);
                this.tituloForm = this.indicador.codigo;
                this.titulo = 'Atualiza ' + this.indicador.codigo;
                this.breadcrumb = ['Indicador', this.indicador.codigo];
                this.indicador = Object.assign(this.indicador, resp);
                this.flag_update = true;
                if(resp && resp.hasOwnProperty('Tags'))
                  this.updateTagList(resp.Tags);
              }, (err)=> this.util.msgErroInfra(err));
          }
      });
  }

  updateTagList(tags:any[]) {
    let options = this.selectElRef.nativeElement.options;
    console.log(options);
    for(let i=0; i < options.length; i++) {
      options[i].selected = tags.find( item=> item.codigo==options[i].value)!=undefined;
    }
    $('.tags').trigger('change');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  newIndicador(form){
    if(!form.pristine){
      this.util.msgAlerta('Tem certeza que vai sair sem gravar?','');
    }else{
      this.router.navigateByUrl('/admin/indicador');
    }
  }

  editConceituacao(flag){
      this.isEditConceituacao = flag;
      if(flag){
        $('.conceituacao').summernote({focus: true, height: 100, lang:'pt-BR',
          toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['ctrl', ['undo', 'redo']]
          ]});
        $('.conceituacao').summernote('code', this.indicador.conceituacao);
      }else{
        this.indicador.conceituacao = $('.conceituacao').summernote('code');
        $('.conceituacao').summernote('destroy');
        this.indicadorService.updateConceituacao(this.indicador.codigo, this.indicador.conceituacao).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }
  editMetodoCalculo(flag){
    this.isEditMetodoCalculo = flag;
    if(flag){
      $('.metodo').summernote({focus: true, height: 100, lang:'pt-BR',
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['superscript', 'subscript']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['ctrl', ['undo', 'redo']]
        ]});
      $('.metodo').summernote('code', this.indicador.metodo_calculo);
    }else{
      this.indicador.metodo_calculo = $('.metodo').summernote('code');
      $('.metodo').summernote('destroy');
      this.indicadorService.updateMetodoCalculo(this.indicador.codigo, this.indicador.metodo_calculo).subscribe(resp=>{
        if(resp.codret==0){
          this.util.msgSucesso(resp.mensagem);
        }else{
          this.util.msgErro(resp.mensagem);
        }
      }, err=>this.util.msgErroInfra(err));
    }
  }
  editFonteDados(flag){
    this.isEditFonteDados = flag;
    if(flag){
      $('.fonte').html('<textarea id="fonte_dados" name="fonte_dados" class="form-control" placeholder="Fonte de dados" rows="1" ></textarea>');
      $('textarea#fonte_dados').val(this.indicador.fonte_dados);
    }else{
      this.indicador.fonte_dados = $('textarea#fonte_dados').val();
      this.indicadorService.updateFonteDados(this.indicador.codigo, this.indicador.fonte_dados).subscribe(resp=>{
        if(resp.codret==0){
          this.util.msgSucesso(resp.mensagem);
        }else{
          this.util.msgErro(resp.mensagem);
        }
      }, err=>this.util.msgErroInfra(err));
    }
  }
  editInterpretacao(flag){
      this.isEditInterpretacao = flag;
      if(flag){
        $('.interpretacao').summernote({focus: true, height: 100, lang:'pt-BR',
          toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['ctrl', ['undo', 'redo']]
          ]});
        $('.interpretacao').summernote('code', this.indicador.interpretacao);
      }else{
        this.indicador.interpretacao = $('.interpretacao').summernote('code');
        $('.interpretacao').summernote('destroy');
        this.indicadorService.updateInterpretacao(this.indicador.codigo, this.indicador.interpretacao).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }

  editUsos(flag){
      this.isEditUsos = flag;
      if(flag){
        $('.usos').summernote({focus: true, height: 100, lang:'pt-BR',
          toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['ctrl', ['undo', 'redo']]
          ]});
        $('.usos').summernote('code', this.indicador.usos);
      }else{
        this.indicador.usos = $('.usos').summernote('code');
        $('.usos').summernote('destroy');
        this.indicadorService.updateUso(this.indicador.codigo, this.indicador.usos).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }

  editLimitacoes(flag){
      this.isEditLimitacoes = flag;
      if(flag){
        $('.limitacoes').summernote({focus: true, height: 100, lang:'pt-BR',
          toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['ctrl', ['undo', 'redo']]
          ]});
        $('.limitacoes').summernote('code', this.indicador.limitacoes);
      }else{
        this.indicador.limitacoes = $('.limitacoes').summernote('code');
        $('.limitacoes').summernote('destroy');
        this.indicadorService.updateLimitacao(this.indicador.codigo, this.indicador.limitacoes).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }

  editNotas(flag){
      this.isEditNotas = flag;
      if(flag){
        $('.notas').summernote({focus: true, height: 100, lang:'pt-BR',
          toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['ctrl', ['undo', 'redo']]
          ]});
        $('.notas').summernote('code', this.indicador.notas);
      }else{
        this.indicador.notas = $('.notas').summernote('code');
        $('.notas').summernote('destroy');
        this.indicadorService.updateNota(this.indicador.codigo, this.indicador.notas).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }

  editObservacoes(flag){
      this.isEditObservacoes = flag;
      if(flag){
        $('.observacoes').summernote({focus: true, height: 100, lang:'pt-BR',
          toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['ctrl', ['undo', 'redo']]
          ]});
        $('.observacoes').summernote('code', this.indicador.observacoes);
      }else{
        this.indicador.observacoes = $('.observacoes').summernote('code');
        $('.observacoes').summernote('destroy');
        this.indicadorService.updateObservacao(this.indicador.codigo, this.indicador.observacoes).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }

  onSubmit(form){
    console.log('Antes de gravar', form.value);
    form.value.codigo = form.value.codigo.toUpperCase(); //Para reforcar... nao entendo pq a ultima letra fica minusculo no javascript/tela.
    this.indicador = Object.assign(this.indicador, form.value)
      if(this.flag_update){
        this.indicadorService.update(this.indicador).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucessoEdicao(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }else{
        this.indicadorService.create(this.indicador).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
            this.router.navigateByUrl('/admin/indicador/'+ this.indicador.codigo);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }
  }
}
