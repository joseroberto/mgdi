import {NgModule, LOCALE_ID} from "@angular/core";
import { CommonModule } from '@angular/common';
import {SmartadminModule} from "../shared/smartadmin.module";

import {routing} from "./site.routing";
import {NgxPaginationModule} from 'ngx-pagination';
import { SiteComponent } from './site.component';
import { ItemComponent } from './item.component';
import {SmartadminLayoutModule} from "../shared/layout/layout.module";
import {MorrisGraphModule} from "../shared/graphs/morris-graph/morris-graph.module";

import { PaginacaoComponent } from '../componentes/paginacao.component';
import { ResultsetComponent } from '../componentes/resultset.component';


@NgModule({
  declarations: [SiteComponent, ItemComponent, PaginacaoComponent, ResultsetComponent],
  imports: [
    routing,CommonModule, SmartadminModule, SmartadminLayoutModule,MorrisGraphModule,NgxPaginationModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  entryComponents: []
})
export class SiteModule {}
