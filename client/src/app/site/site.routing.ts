import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import { BlogComponent } from './blog.component';
import { ItemComponent } from './item.component';

export const routes:Routes = [
  {
      path: '',
      component: BlogComponent,
      data: {pageTitle: 'Site'}
  }, { path: 'item', component: ItemComponent}
];

export const routing = RouterModule.forChild(routes);
