import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FrontendLayoutComp } from './FrontendLayoutComp';
import { HeaderComp } from './header/HeaderComp';
import { FooterComp } from './footer/FooterComp';
import { FrontendLayoutModuleRoute } from './FrontendLayoutModuleRoute';

@NgModule({
  declarations: [
    FrontendLayoutComp,
    HeaderComp,
    FooterComp
  ],

  imports: [
    CommonModule, 
    FrontendLayoutModuleRoute
  ],

  providers: [],

})

export class FrontendLayoutModule { }
