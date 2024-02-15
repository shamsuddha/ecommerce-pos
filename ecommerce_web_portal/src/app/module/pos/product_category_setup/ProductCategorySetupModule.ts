import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ProductCategoryRoutes } from "./ProductCategoryRoute";
import { ProductCategorySetupComp } from "./ProductCategorySetupComp";

@NgModule({
  declarations: [
    ProductCategorySetupComp
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    ProductCategoryRoutes
  ],

  providers: [
  ],
})
export class ProductCategorySetupModule { }
