import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {SmartadminInputModule} from "./shared/forms/input/smartadmin-input.module";

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Core providers
import {CoreModule} from "./core/core.module";
import {SmartadminLayoutModule} from "./shared/layout/layout.module";

import {LoginComponent} from './auth/login.component';

import { ModalModule, TooltipModule, BsDropdownModule} from "ngx-bootstrap";


// Servicos
import { AuthenticationService, ClassificacaoIndicadorService, PeriodicidadeService,
  UnidadeMedidaService, IndicadorService, UtilService,
  TagCategoriaService, TagService, CategoriaAnaliseService, TipoConsultaService,
  BancoDadosService, UnidadeService, GranularidadeService, CriterioAgregacaoService,
  VersionService, UsuarioService, ConsultaService, PolaridadeService } from './services/index';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [ // import Angular's modules
    ModalModule, TooltipModule, BsDropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SmartadminLayoutModule,
    routing,
    SmartadminInputModule
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthenticationService,
    ClassificacaoIndicadorService,
    PeriodicidadeService,
    UnidadeMedidaService,
    UnidadeService,
    IndicadorService,
    UtilService,
    TagCategoriaService,
    TagService,
    CategoriaAnaliseService,
    TipoConsultaService,
    BancoDadosService,
    CookieService,
    GranularidadeService,
    CriterioAgregacaoService,
    VersionService,
    UsuarioService,
    ConsultaService,
    PolaridadeService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}


}
