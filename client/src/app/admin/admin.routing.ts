import { Routes, RouterModule } from '@angular/router';

import {ModuleWithProviders} from "@angular/core";

import {PainelComponent} from "./painel/painel.component";
import {IndicadorListaComponent} from './indicador/indicador-lista.component';
import {IndicadorNovoComponent} from "./indicador/indicador-novo.component";
import { FlotChartsComponent } from './grafico/flot-charts.component';
import { MorrisChartsComponent } from './grafico/morris-charts.component';
import {GeneralElementsComponent} from "./teste/general-elements.component";

export const homeRoutes: Routes = [
    {
        path: '',
        component: PainelComponent,
        data: {pageTitle: 'Admin'}
    },
    {
    path: 'painel',
    component: PainelComponent,
    data: {pageTitle: 'Painel'}
    },
    {
    path: 'indicadornovo',
    component: IndicadorNovoComponent,
    data: {pageTitle: 'Novo indicador'}
    },
    {
    path: 'indicadorlista',
    component: IndicadorListaComponent,
    data: {pageTitle: 'Lista Indicadores'}
    },
    {
    path: 'importa',
    component: GeneralElementsComponent,
    data: {pageTitle: 'Importa Indicadores'}
    },
    {
    path: 'grafico',
    component: FlotChartsComponent,
    data: {pageTitle: 'Gráfico Indicadores'}
    },
    {
    path: 'grafico2',
    component: MorrisChartsComponent,
    data: {pageTitle: 'Gráfico Indicadores'}
  }
];

export const AdminRouting:ModuleWithProviders = RouterModule.forChild(homeRoutes);
