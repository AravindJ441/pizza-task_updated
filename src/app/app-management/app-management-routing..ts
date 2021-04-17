import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AppManagementComponent } from './app-management.component';





export const AppManagagementRoutes: Routes = [
    {
        path: '',
        component: AppManagementComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                canActivateChild: [AuthGuard],
                loadChildren: () => import('./home-management/home-management.module').then(m => m.HomeManagementModule)
            },
        ]
    },
    {
        path: 'authenticate',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    }


];


export const AppManagementComponentDeclarations = [

]


