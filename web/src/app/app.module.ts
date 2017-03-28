import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './services/auth.guard';
import { AppRoutingModule } from './app.routing';

import { LayoutSiteComponent } from './layouts/layout-site.component';
import { LayoutAdminComponent } from './layouts/layout-admin.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutSiteComponent,
    LayoutAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
