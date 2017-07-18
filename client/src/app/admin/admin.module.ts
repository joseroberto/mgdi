import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';

import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import {SmartadminLayoutModule} from "../shared/layout/layout.module";
import {StatsModule} from "../shared/stats/stats.module";
import {SmartadminWidgetsModule} from "../shared/widgets/smartadmin-widgets.module";
import {FlotChartModule} from "../shared/graphs/flot-chart/flot-chart.module";
import {SmartadminEditorsModule} from "../shared/forms/editors/smartadmin-editors.module";
import { FlotChartsComponent } from './grafico/flot-charts.component';
import { MorrisChartsComponent } from './grafico/morris-charts.component';
import {MorrisGraphModule} from "../shared/graphs/morris-graph/morris-graph.module";
import {AccordionModule, CarouselModule} from "ngx-bootstrap";
import {SmartadminValidationModule} from "../shared/forms/validation/smartadmin-validation.module";
import {TreeViewModule} from "../shared/ui/tree-view/tree-view.module";

import {PainelComponent} from "./painel/painel.component";
import {GeneralElementsComponent} from "./teste/general-elements.component";

// Itens de indicadores
import {IndicadorListaComponent} from './indicador/indicador-lista.component';
import {IndicadorCadastroComponent} from "./indicador/indicador-cadastro.component";
import {IndicadorListaUnidadeComponent} from './indicador/indicador-lista-unidade.component';

// Itens de planos
import {ExemploListaComponent} from './plano/exemplo-lista.component';
import {PlanoComponent} from './plano/plano.component';

import {WindowRef} from './indicador/WindowRef';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    SmartadminModule,
    SmartadminValidationModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminDatatableModule,
    SmartadminWidgetsModule,
    MorrisGraphModule,
    FlotChartModule,
    SmartadminEditorsModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    TreeViewModule
  ],
  declarations: [PainelComponent,
    FlotChartsComponent,
    MorrisChartsComponent,
    GeneralElementsComponent,
    IndicadorListaComponent,
    IndicadorCadastroComponent,
    IndicadorListaUnidadeComponent,
    ExemploListaComponent,
    PlanoComponent
  ],
  providers:[WindowRef]
})

export class AdminModule { }
