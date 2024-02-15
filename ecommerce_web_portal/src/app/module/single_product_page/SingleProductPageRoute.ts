import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleProductPageComp } from './SingleProductPageComp';

const routes: Routes = [
  {
    path: '', component: SingleProductPageComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleProductPageRoute { }
