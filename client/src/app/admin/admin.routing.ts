import { Routes, RouterModule } from '@angular/router';

import {ModuleWithProviders} from "@angular/core";

import {PainelComponent} from "./painel/painel.component";

import { FlotChartsComponent } from './grafico/flot-charts.component';
import { MorrisChartsComponent } from './grafico/morris-charts.component';
import {GeneralElementsComponent} from "./teste/general-elements.component";

// Itens de indicadores
import {IndicadorListaComponent} from './indicador/indicador-lista.component';
import {IndicadorCadastroComponent} from "./indicador/indicador-cadastro.component";
import {IndicadorListaUnidadeComponent} from './indicador/indicador-lista-unidade.component';

// Itens de planos
import {PlanoComponent} from './plano/plano.component';
import {ExemploListaComponent} from './plano/exemplo-lista.component';

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
    path: 'indicador',
    component: IndicadorCadastroComponent,
    data: {pageTitle: 'Novo indicador'}
    },
    {
    path: 'indicador/:codigo',
    component: IndicadorCadastroComponent,
    data: {pageTitle: 'Edita indicador'}
    },
    {
    path: 'indicadorlista',
    component: IndicadorListaComponent,
    data: {pageTitle: 'Lista Indicadores'}
    },
    {
    path: 'indicadorlistaunidade',
    component: IndicadorListaUnidadeComponent,
    data: {pageTitle: 'Lista Indicadores por Unidade'}
    },
    {
    path: 'plano',
    component: PlanoComponent,
    data: {pageTitle: 'Exemplo de lista de planos'}
    },
    {
    path: 'exemplo',
    component: ExemploListaComponent,
    data: {pageTitle: 'Exemplo de lista de planos'}
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
