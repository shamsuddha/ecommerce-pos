import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainModuleComp } from './MainModuleComp';
import { MainModuleRoute } from './MainModuleRoute';
import { HeaderComp } from './header/HeaderComp';
import { SidebarComp } from './sidebar/SidebarComp';
import { FooterComp } from './footer/FooterComp';

@NgModule({
  declarations: [
    MainModuleComp,
    HeaderComp,
    FooterComp,
    SidebarComp
  ],

  imports: [
    CommonModule, 
    MainModuleRoute
  ],

  providers: [],

})

export class MainModule { }
