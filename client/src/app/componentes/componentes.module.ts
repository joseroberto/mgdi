import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {SmartadminModule} from "../shared/smartadmin.module";

import { ResultsetComponent } from './resultset.component';
import { PaginacaoComponent } from './paginacao.component';
import { WindowRef } from './WindowRef';

@NgModule({
  imports: [ NgxPaginationModule, CommonModule, SmartadminModule ],
  declarations: [ResultsetComponent, PaginacaoComponent],
  exports:[ PaginacaoComponent, ResultsetComponent],
  providers:[WindowRef]
})
export class ComponentesModule { }
