import { Routes, RouterModule } from '@angular/router';

import {ModuleWithProviders} from "@angular/core";

import {PainelComponent} from "./painel/painel.component";

import { FlotChartsComponent } from './grafico/flot-charts.component';
import { MorrisChartsComponent } from './grafico/morris-charts.component';

// Itens de indicadores
import {IndicadorListaComponent} from './indicador/indicador-lista.component';
import {IndicadorCadastroComponent} from "./indicador/indicador-cadastro.component";
import {IndicadorListaUnidadeComponent} from './indicador/indicador-lista-unidade.component';

// Itens de planos
import {ProgramaComponent} from './programa/programa.component';

// Itens auxiliares
import {UsuarioComponent} from './cadastros_auxiliares/usuario.component';
import {CategoriaAnaliseComponent} from './cadastros_auxiliares/categoria-analise.component';

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
    path: 'programa',
    component: ProgramaComponent,
    data: {pageTitle: 'Programas - Instrumentos de Gestão'}
    },
    {
    path: 'usuario',
    component: UsuarioComponent,
    data: {pageTitle: 'Lista de usuários'}
    },
    {
    path: 'categoria-analise',
    component: CategoriaAnaliseComponent,
    data: {pageTitle: 'Lista de categorias de análise'}
    },
];

export const AdminRouting:ModuleWithProviders = RouterModule.forChild(homeRoutes);
