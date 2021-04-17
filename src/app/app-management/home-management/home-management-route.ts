import { Routes } from '@angular/router';
import { HomeManagement } from './home-management.component';
import { ProductListCompnent } from './product-list/product-list.component';




export const HomeManagementRoute :Routes =[
    {
        path: '',
        component:HomeManagement
        // children: [
        //     { path: '', redirectTo: 'product-list', pathMatch: 'full' },
        //     {
        //         path: 'product-list', component: ProductListCompnent
        //     },

        // ]
    }
]