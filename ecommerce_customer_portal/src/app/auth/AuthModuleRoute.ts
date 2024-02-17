import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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