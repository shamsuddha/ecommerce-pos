import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComp } from './RegistrationComp';

const routes: Routes = [
  {
    path: '', component: RegistrationComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegistrationRoute { }
