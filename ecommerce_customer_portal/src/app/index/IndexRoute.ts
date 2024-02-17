import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComp } from './IndexComp';

const routes: Routes = [
  {
    path: '', 
    component: IndexComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IndexRoute { }
