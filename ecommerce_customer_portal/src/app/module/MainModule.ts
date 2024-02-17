import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainModuleComp } from './MainModuleComp';
import { MainModuleRoute } from './MainModuleRoute';
import { HeaderComp } from './header/HeaderComp';
import { FooterComp } from './footer/FooterComp';

@NgModule({
  declarations: [
    MainModuleComp,
    HeaderComp,
    FooterComp
  ],

  imports: [
    CommonModule, 
    MainModuleRoute
  ],

  providers: [],

})

export class MainModule { }
