import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashboardComp } from './DashboardComp';
import { DashboardRoute } from './DashboardRoute';

@NgModule({
  declarations: [
    DashboardComp
  ],
  imports: [
    CommonModule,
    DashboardRoute
  ],
  providers: [],
})

export class DashboardModule { }
