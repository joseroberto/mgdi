import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { UnidadeMedida } from '../../model/unidade-medida';
import { UnidadeMedidaService, UtilService } from '../../services/index';

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
          private router: Router,
          private unidadeMedidaService:UnidadeMedidaService,
          private util: UtilService){
            this.breadcrumb = ['Unidade de Medida', 'Nova'];
            this.novaunidademedida = new UnidadeMedida();
          }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
            console.log('Codigo unidade de medida em edicao:', this.codigo);
            this.loadUnidadeMedida();
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    private newUnidadeMedida(form){
      if(!form.pristine){
        this.util.msgAlerta('Tem certeza que vai sair sem gravar?','');
      }else{
        this.router.navigateByUrl('/admin/unidade-medida');
      }
    }

    private loadUnidadeMedida(){
        if(this.codigo){
          this.unidadeMedidaService.getItem(this.codigo).subscribe(resp=>{
              this.novaunidademedida = Object.assign(new UnidadeMedida(), resp);
              console.log('Registro em edicao:', this.novaunidademedida);
              this.titulo = 'Atualiza ' + this.novaunidademedida.codigo;
              this.breadcrumb = ['Categoria de Análise', this.novaunidademedida.codigo];
            }, (err)=> this.util.msgErroInfra(err));
        }
    }

}
