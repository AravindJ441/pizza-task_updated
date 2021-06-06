import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AppManagementComponent } from './app-management.component';
import { LoginComponent } from './authentication/login/login.component';





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
    },{
        path: 'authenticate',
        component:LoginComponent
    }


];


export const AppManagementComponentDeclarations = [

]


