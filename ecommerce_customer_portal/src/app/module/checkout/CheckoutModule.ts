import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckoutComp } from "./CheckoutComp";
import { CheckoutRoute } from "./CheckoutRoute";

@NgModule({
  declarations: [
    CheckoutComp
  ],
  
  imports: [
    CommonModule,
    CheckoutRoute
  ],

  providers: [
  ],
})
export class CheckoutModule { }
