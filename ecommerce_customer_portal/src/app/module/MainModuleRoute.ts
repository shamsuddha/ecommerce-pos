import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComp } from './MainModuleComp';

const routes: Routes = [
  {
    path: '', 
    component: MainModuleComp,
    children: [
      {
        path: 'home', loadChildren: () => import('./home_page/HomePageModule')
          .then(m => m.HomePageModule)
      },      
      {
        path: 'cart', loadChildren: () => import('./cart/CartModule')
          .then(m => m.CartModule)
      },      
      {
        path: 'category', loadChildren: () => import('./category_page/CategoryPageModule')
          .then(m => m.CategoryPageModule)
      },      
      {
        path: 'checkout', loadChildren: () => import('./checkout/CheckoutModule')
          .then(m => m.CheckoutModule)
      },  
      {
        path: 'login', loadChildren: () => import('./login/LoginModule')
          .then(m => m.LoginModule)
      },          
      {
        path: 'registration', loadChildren: () => import('./registration/RegistrationModule')
          .then(m => m.RegistrationModule)
      },        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
