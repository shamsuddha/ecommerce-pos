import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CartComp } from "./CartComp";
import { CartRoute } from "./CartRoute";

@NgModule({
  declarations: [
    CartComp
  ],

  imports: [
    CommonModule,
    CartRoute
  ],

  providers: [

  ],
})
export class CartModule { }
