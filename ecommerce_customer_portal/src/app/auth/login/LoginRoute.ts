import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComp } from './LoginComp';

const routes: Routes = [
  {
    path: '', 
    component: LoginComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoute { }
