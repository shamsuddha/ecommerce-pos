import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BackendLayoutComp } from './BackendLayoutComp';
import { HeaderComp } from './header/HeaderComp';
import { FooterComp } from './footer/FooterComp';
import { BackendLayoutModuleRoute } from './BackendLayoutModuleRoute';

@NgModule({
  declarations: [
    BackendLayoutComp,
    HeaderComp,
    FooterComp
  ],

  imports: [
    CommonModule, 
    BackendLayoutModuleRoute
  ],

  providers: [],

})

export class BackendLayoutModule { }
