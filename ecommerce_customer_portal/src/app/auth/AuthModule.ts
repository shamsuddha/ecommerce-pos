import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthModuleComp } from './AuthModuleComp';
import { AuthModuleRoute } from './AuthModuleRoute';

@NgModule({
  declarations: [
    AuthModuleComp,
  ],

  imports: [
    CommonModule, 
    AuthModuleRoute
  ],

  providers: [],

})

export class AuthModule { }
