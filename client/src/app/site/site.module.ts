import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {routing} from "./site.routing";
import {NgxPaginationModule} from 'ngx-pagination';

import { SiteComponent } from './site.component';
import { ItemComponent } from './item.component';
import {SmartadminLayoutModule} from "../shared/layout/layout.module";
import {MorrisGraphModule} from "../shared/graphs/morris-graph/morris-graph.module";

@NgModule({
  declarations: [SiteComponent, ItemComponent],
  imports: [
    routing,CommonModule, SmartadminLayoutModule,MorrisGraphModule, NgxPaginationModule
  ],
  providers: [],
  entryComponents: []
})
export class SiteModule {}
