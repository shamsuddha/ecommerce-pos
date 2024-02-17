import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RegistrationComp } from './RegistrationComp';
import { RegistrationRoute } from './RegistrationRoute';


@NgModule({
  declarations: [
    RegistrationComp
  ],

  imports: [
    CommonModule,
    RegistrationRoute
  ],

  providers: [],

})

export class RegistrationModule { }
