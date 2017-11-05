import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { CategoriaAnalise } from '../../model/index';
import {ModalDirective} from "ngx-bootstrap";
import { UtilService, CategoriaAnaliseService } from '../../services/index';

declare var $: any;

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './categoria-analise-cadastro.component.html',
  styles:['div.note-editable.panel-body{height: 180px;}']
})
export class CategoriaAnaliseCadastroComponent implements OnInit, OnDestroy{
    private sub: any;
    private tituloForm = 'Nova Categoria de Análise';
    private titulo = 'Nova Categoria de Análise';
    private codigo:string = '';
    private breadcrumb = [];
    private novacategoria:CategoriaAnalise;
    private tituloModal:string = '';
    private editCategoriaAnalise:any = {codigo:0, titulo:''};

    @ViewChild('categoriaAnaliseModal') private categoriaAnaliseModal:ModalDirective;

    constructor(private route: ActivatedRoute,
          private router: Router,
          private util:UtilService,
          private categoriaAnaliseService:CategoriaAnaliseService){
            this.breadcrumb = ['Categoria de Análise', 'Nova'];
            this.novacategoria = new CategoriaAnalise();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
            console.log('Codigo categoria em edicao:', this.codigo);
            this.loadCategoriaAnalise();
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    private newCategoriaAnalise(form){
      if(!form.pristine){
        this.util.msgQuestion('Tem certeza que vai sair sem gravar?').then(
          ()=>{ this.router.navigateByUrl('/admin/categoria-analise'); },
          ()=>{  }
        );
      }else{
        this.router.navigateByUrl('/admin/categoria-analise');
      }
    }

    private loadCategoriaAnalise(){
        if(this.codigo){
          this.categoriaAnaliseService.get(this.codigo).subscribe(resp=>{
              this.novacategoria = Object.assign(new CategoriaAnalise(), resp);
              console.log('Registro em edicao:', this.novacategoria);
              this.tituloForm = this.novacategoria.codigo;
              this.titulo = 'Atualiza ' + this.novacategoria.codigo;
              this.breadcrumb = ['Categoria de Análise', this.novacategoria.codigo];
            }, (err)=> this.util.msgErroInfra(err));
        }
    }

    private adicionaItemCategoriaAnalise(){
      $('.form-horizontal').find("input").change();
      $('.btn-submit').prop('disabled', false);
      let valorSelecionado = $('#item').val();
      if(valorSelecionado){
        this.novacategoria.Itens.push({codigo:0, descricao: valorSelecionado});
        $('#item').val('');
      }else{
        this.util.msgErro('Item de um categoria de análise não pode ser vazio');
      }
    }

    private onSubmit(form){
      if(form.valid){
        if(this.codigo){
        console.log('Reg a atualizar', this.novacategoria);
        this.categoriaAnaliseService.update(this.novacategoria).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucessoEdicao(resp.mensagem);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, err=>this.util.msgErroInfra(err));
      }else{
        console.log('Reg a inserir', this.novacategoria);
        this.novacategoria['codigo'] = this.novacategoria.codigo.toUpperCase();
        this.categoriaAnaliseService.create(this.novacategoria).subscribe(resp=>{
          if(resp.codret==0){
            this.util.msgSucesso(resp.mensagem);
            this.router.navigateByUrl('/admin/categoria-analise/'+ resp.codigo);
          }else{
            this.util.msgErro(resp.mensagem);
          }
        }, (err)=>this.util.msgErroInfra(err));
      }
      }else{
        this.util.msgErro('Erro de validação de campos');
      }
    }

    private apagaItemCategoriaAnalise(i){
      $('.btn-submit').prop('disabled', false);
      this.novacategoria.Itens[i]['deleted'] = 1;
    }

    private editItemCategoriaAnalise(i){
      console.log('Edita', this.novacategoria.Itens[i]);
      this.editCategoriaAnalise = Object.assign({}, this.novacategoria.Itens[i], {indice: i});
      this.tituloModal = `Atualizando ${this.editCategoriaAnalise.codigo} - ${this.editCategoriaAnalise.descricao}`;
      this.categoriaAnaliseModal.show();
    }

    private atualizaItemCategoriaAnalise(){
      $('.btn-submit').prop('disabled', false);
      this.novacategoria.Itens[this.editCategoriaAnalise.indice] = Object.assign({}, this.editCategoriaAnalise);
      this.categoriaAnaliseModal.hide();
    }
}
