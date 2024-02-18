import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CategoryRoute } from './CategoryRoute';
import { CategoryComp } from './CategoryComp';


@NgModule({
  declarations: [
    CategoryComp
  ],
  imports: [
    CommonModule,
    CategoryRoute
  ],
  providers: [],
})

export class CategoryModule { }
