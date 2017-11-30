import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {SmartadminModule} from "../shared/smartadmin.module";

import { ImageTypePipe } from './image-type.pipe';
import { FileSizePipe } from './file-size.pipe';

import { ResultsetComponent } from './resultset.component';
import { PaginacaoComponent } from './paginacao.component';
import { GraficoComponent } from './grafico.component';
import { WindowRef } from './WindowRef';

@NgModule({
  imports: [ NgxPaginationModule, CommonModule, SmartadminModule ],
  declarations: [ResultsetComponent, PaginacaoComponent, GraficoComponent, ImageTypePipe, FileSizePipe],
  exports:[ PaginacaoComponent, ResultsetComponent, GraficoComponent, ImageTypePipe, FileSizePipe],
  providers:[WindowRef]
})
export class ComponentesModule { }
