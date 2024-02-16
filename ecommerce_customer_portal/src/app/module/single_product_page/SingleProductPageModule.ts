import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SingleProductPageComp } from "./SingleProductPageComp";
import { SingleProductPageRoute } from "./SingleProductPageRoute";


@NgModule({
  declarations: [
    SingleProductPageComp
  ],

  imports: [
    CommonModule,
    SingleProductPageRoute
  ],

  providers: [
  ],
})
export class SingleProductPageModule { }
