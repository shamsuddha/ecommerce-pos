import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComp } from "./HomePageComp";
import { HomePageRoute } from "./HomePageRoute";

@NgModule({
  declarations: [
    HomePageComp
  ],
  
  imports: [
    CommonModule,
    HomePageRoute
  ],

  providers: [
  ],
})
export class HomePageModule { }
