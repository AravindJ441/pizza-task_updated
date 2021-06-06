import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppManagagementRoutes } from './app-management-routing.';
import { AppManagementComponent } from './app-management.component';

import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './authentication/login/login.component';



@NgModule({
    declarations:[
        AppManagementComponent,
        LoginComponent
    ],
    imports:[
        RouterModule.forChild(AppManagagementRoutes),
        MatSelectModule,
        CommonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule
    ],
    providers:[]
})
export class AppManagementModule {

}