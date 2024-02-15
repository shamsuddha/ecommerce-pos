import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegistrationComp } from "./RegistrationComp";
import { RegistrationRoute } from "./RegistrationRoute";

@NgModule({
  declarations: [
    RegistrationComp
  ],
  
  imports: [
    CommonModule,
    RegistrationRoute
  ],

  providers: [
  ],
})
export class RegistrationModule { }
