import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategorySetupComp } from "./CategorySetupComp";
import { CategorySetupRoute } from "./CategorySetupRoute";

@NgModule({
  declarations: [
    CategorySetupComp
  ],
  
  imports: [
    CommonModule,
    CategorySetupRoute
  ],

  providers: [
  ],
})
export class CategorySetupModule { }
