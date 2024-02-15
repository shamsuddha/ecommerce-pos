import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategorySetupComp } from './ProductCategorySetupComp';

const routes: Routes = [
  {
    path: '', component: ProductCategorySetupComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductCategoryRoutes { }
