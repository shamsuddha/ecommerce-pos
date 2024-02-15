import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComp } from './CheckoutComp';


const routes: Routes = [
  {
    path: '', component: CheckoutComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CheckoutRoute { }
