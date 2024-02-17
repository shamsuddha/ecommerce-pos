import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IndexComp } from './IndexComp';
import { IndexRoute } from './IndexRoute';

@NgModule({
  declarations: [
    IndexComp
  ],

  imports: [
    CommonModule,
    IndexRoute
  ],

  providers: [],

})

export class IndexModule { }
