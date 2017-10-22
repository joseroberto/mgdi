import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { CategoriaAnalise } from '../../model/index';

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
    private codigo:number = 0;
    private breadcrumb = [];
    private novacategoria:CategoriaAnalise;

    constructor(private route: ActivatedRoute,
          private router: Router){
            this.breadcrumb = ['Categoria de Análise', 'Nova'];
            this.novacategoria = new CategoriaAnalise();
          }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
            console.log('Codigo categoria em edicao:', this.codigo);
            if(this.codigo){
              this.titulo = 'Atualiza Categoria de Análise';
              this.breadcrumb = ['Categoria de Análise', 'Teste'];
            }
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }


}
