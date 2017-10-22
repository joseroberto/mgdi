import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { UnidadeMedida } from '../../model/unidade-medida';

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './unidade-medida-cadastro.component.html',
  styles:['div.note-editable.panel-body{height: 180px;}']
})
export class UnidadeMedidaCadastroComponent implements OnInit, OnDestroy{
    private sub: any;
    private tituloForm = 'Unidade de Medida';
    private titulo = 'Unidade de Medida';
    private codigo:number = 0;
    private breadcrumb = [];
    private novaunidademedida:UnidadeMedida;


    constructor(private route: ActivatedRoute,
          private router: Router){
            this.breadcrumb = ['Unidade de Medida', 'Nova'];
            this.novaunidademedida = new UnidadeMedida();
          }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
            console.log('Codigo unidade de medida em edicao:', this.codigo);
            if(this.codigo){
              this.titulo = 'Atualiza Unidade de Medida';
              this.breadcrumb = ['Unidade de Medida', 'Teste'];
            }
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }


}
