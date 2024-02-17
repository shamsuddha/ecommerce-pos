import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoginComp } from './LoginComp';
import { LoginRoute } from './LoginRoute';

@NgModule({
  declarations: [
    LoginComp
  ],

  imports: [
    CommonModule,
    LoginRoute
  ],

  providers: [],

})

export class LoginModule { }
