import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComp } from './CategoryComp';

const routes: Routes = [
  {
    path: '', 
    component: CategoryComp,
    children: [    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoute { }
