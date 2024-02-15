import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategoryPageComp } from "./CategoryPageComp";
import { CategoryPageRoute } from "./CategoryPageRoute";


@NgModule({
  declarations: [
    CategoryPageComp
  ],
  
  imports: [
    CommonModule,
    CategoryPageRoute
  ],

  providers: [
  ],
})
export class CategoryPageModule { }
