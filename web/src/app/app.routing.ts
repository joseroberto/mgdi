import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { LayoutSiteComponent } from './layouts/layout-site.component';
import { LayoutAdminComponent } from './layouts/layout-admin.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutSiteComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Inicial'
    },
    children: [
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
