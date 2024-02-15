import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComp } from './CategoryPageComp';

const routes: Routes = [
  {
    path: '', component: CategoryPageComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryPageRoute { }
