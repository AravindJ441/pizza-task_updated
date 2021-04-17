import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppManagagementRoutes } from './app-management-routing.';
import { AppManagementComponent } from './app-management.component';

import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations:[
        AppManagementComponent
    ],
    imports:[
        RouterModule.forChild(AppManagagementRoutes),
        MatSelectModule,
        CommonModule
    ],
    providers:[]
})
export class AppManagementModule {

}