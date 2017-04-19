import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ClassificacaoIndicadorService, IndicadorService, UnidadeMedidaService, PeriodicidadeService, AreaService } from '../../services/index';

@FadeInTop()
@Component({
  selector: 'sa-form-elements',
  templateUrl: './indicador-novo.component.html',
})
export class IndicadorNovoComponent implements OnInit {
  private currenttab = 't1';

  colecaoClassificacao:any[] = [];
  colecaoPeriodicidade:any[] = [];
  colecaoUnidadeMedida:any[] = [];

  constructor(private classificacaoIndicadorService:ClassificacaoIndicadorService,
      private indicadorService:IndicadorService,
      private periodicidadeService:PeriodicidadeService,
      private areaService:AreaService,
      private unidadeMedidaService:UnidadeMedidaService) {}

  ngOnInit() {
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

  trataErro(err){
    console.log(err);
  }
}
