import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComp } from './MainModuleComp';
import { DashboardComp } from './dashboard/DashboardComp';

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: 'dashboard', 
        component:DashboardComp,
       
      },      
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
