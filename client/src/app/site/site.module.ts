import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {routing} from "./site.routing";

import { BlogComponent } from './blog.component';
import { ItemComponent } from './item.component';
import {SmartadminLayoutModule} from "../shared/layout/layout.module";
import {MorrisGraphModule} from "../shared/graphs/morris-graph/morris-graph.module";

@NgModule({
  declarations: [BlogComponent, ItemComponent],
  imports: [
    routing,SmartadminLayoutModule,MorrisGraphModule
  ],
  providers: [],
  entryComponents: []
})
export class SiteModule {}
