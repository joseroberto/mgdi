import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { TagCategoria } from '../../model/tag-categoria';
import { UtilService, TagCategoriaService } from '../../services/index';

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './tag-cadastro.component.html',
  styles:['div.note-editable.panel-body{height: 180px;}']
})
export class TagCadastroComponent implements OnInit, OnDestroy{
    private sub: any;
    private tituloForm = 'Grupo de Marcadores';
    private titulo = 'Novo Grupo de Marcador';
    private codigo:number = 0;
    private breadcrumb = [];
    private novatagcategoria:TagCategoria;

    constructor(private route: ActivatedRoute,
          private router: Router,
          private tagCategoriaService:TagCategoriaService,
          private util:UtilService){
            this.breadcrumb = ['Grupo de Marcador', 'Novo'];
            this.novatagcategoria = new TagCategoria();
          }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
            console.log('Codigo marcador em edicao:', this.codigo);
            this.loadCategoriaTag();
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    private newCategoriaTag(form){
      if(!form.pristine){
        this.util.msgAlerta('Tem certeza que vai sair sem gravar?','');
      }else{
        this.router.navigateByUrl('/admin/tag');
      }
    }

    private loadCategoriaTag(){
        if(this.codigo){
          this.tagCategoriaService.getItem(this.codigo).subscribe(resp=>{
              this.novatagcategoria = Object.assign(new TagCategoria(), resp);
              console.log('Registro em edicao:', this.novatagcategoria);
              this.titulo = 'Atualiza ' + this.novatagcategoria.codigo;
              this.breadcrumb = ['Categoria de Análise', this.novatagcategoria.codigo];
            }, (err)=> this.util.msgErroInfra(err));
        }
    }

}
