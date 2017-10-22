import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { TagCategoria } from '../../model/tag-categoria';

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './tag-cadastro.component.html',
  styles:['div.note-editable.panel-body{height: 180px;}']
})
export class TagCadastroComponent implements OnInit, OnDestroy{
    private sub: any;
    private tituloForm = 'Marcadores';
    private titulo = 'Novo Marcador';
    private codigo:number = 0;
    private breadcrumb = [];
    private novatagcategoria:TagCategoria;

    constructor(private route: ActivatedRoute,
          private router: Router){
            this.breadcrumb = ['Marcador', 'Novo'];
            this.novatagcategoria = new TagCategoria();
          }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
            console.log('Codigo marcador em edicao:', this.codigo);
            if(this.codigo){
              this.titulo = 'Atualiza Marcador';
              this.breadcrumb = ['Categoria de Análise', 'Teste'];
            }
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }


}
