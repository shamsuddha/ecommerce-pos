import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComp } from './DashboardComp';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComp,
    children: [    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoute { }
