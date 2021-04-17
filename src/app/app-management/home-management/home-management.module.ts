import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeManagementRoute } from './home-management-route';
import { HomeManagement } from './home-management.component';
import { ProductListCompnent } from './product-list/product-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
    declarations:[
        HomeManagement,
        ProductListCompnent
    ],
    imports:[
        RouterModule.forChild(HomeManagementRoute),
        MatDialogModule,
        CommonModule,
        MatCardModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatPaginatorModule

    ],
    providers:[]
})
export class HomeManagementModule {
    
}