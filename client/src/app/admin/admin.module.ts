import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';

import {SmartadminModule} from "../shared/smartadmin.module";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import {SmartadminLayoutModule} from "../shared/layout/layout.module";
import {StatsModule} from "../shared/stats/stats.module";
import {SmartadminWidgetsModule} from "../shared/widgets/smartadmin-widgets.module";
import {FlotChartModule} from "../shared/graphs/flot-chart/flot-chart.module";

import {PainelComponent} from "./painel/painel.component";
import {GeneralElementsComponent} from "./teste/general-elements.component";

import {IndicadorListComponent} from './indicador/indicador-list.component';
import {FormElementsComponent} from "./indicador/form-elements.component";
import { FlotChartsComponent } from './grafico/flot-charts.component';
import { MorrisChartsComponent } from './grafico/morris-charts.component';
import {MorrisGraphModule} from "../shared/graphs/morris-graph/morris-graph.module";
import {AccordionModule, CarouselModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    SmartadminModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminDatatableModule,
    SmartadminWidgetsModule,
    MorrisGraphModule,
    FlotChartModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot()

  ],
  declarations: [PainelComponent, IndicadorListComponent, FormElementsComponent,
    FlotChartsComponent, MorrisChartsComponent, GeneralElementsComponent ]
})

export class AdminModule { }
