import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComp } from './MainModuleComp';

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/DashboardModule')
          .then(m => m.DashboardModule)
      },      
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
