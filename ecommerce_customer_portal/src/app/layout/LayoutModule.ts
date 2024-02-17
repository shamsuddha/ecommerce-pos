import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModuleComp } from './LayoutModuleComp';
import { LayoutModuleRoute } from './LayoutModuleRoute';
import { HeaderComp } from './header/HeaderComp';
import { FooterComp } from './footer/FooterComp';

@NgModule({
  declarations: [
    LayoutModuleComp,
    HeaderComp,
    FooterComp
  ],

  imports: [
    CommonModule, 
    LayoutModuleRoute
  ],

  providers: [],

})

export class LayoutModule { }
