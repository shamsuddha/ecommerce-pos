import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComp } from './CartComp';

const routes: Routes = [
  {
    path: '', component: CartComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartRoute { }
