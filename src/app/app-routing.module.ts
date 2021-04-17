import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-management',
    pathMatch:'full'
  },
  {
    path:'app-management',
    loadChildren: () => import('./app-management/app-management.module').then(m => m.AppManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
