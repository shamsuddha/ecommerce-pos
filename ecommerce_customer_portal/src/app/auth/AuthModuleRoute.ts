import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModuleComp } from './AuthModuleComp';

const routes: Routes = [
  {
    path: '',
    component:AuthModuleComp,
    children: [
      {
        path: 'login', loadChildren: () => import('./login/LoginModule')
          .then(m => m.LoginModule)
      },      
      {
        path: 'register', loadChildren: () => import('./registration/RegistrationModule')
          .then(m => m.RegistrationModule)
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthModuleRoute { }