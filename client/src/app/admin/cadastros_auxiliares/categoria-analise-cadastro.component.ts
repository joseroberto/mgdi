import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { CategoriaAnalise } from '../../model/index';
import { UtilService, CategoriaAnaliseService } from '../../services/index';

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
        this.util.msgAlerta('Tem certeza que vai sair sem gravar?','');
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
}
