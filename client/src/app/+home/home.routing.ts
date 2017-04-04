import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ModuleWithProviders} from "@angular/core";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            pageTitle: 'Início'
        }
    }
];

export const homeRouting:ModuleWithProviders = RouterModule.forChild(homeRoutes);
