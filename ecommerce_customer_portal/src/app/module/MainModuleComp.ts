import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MainModuleRoute } from "./MainModuleRoute";

@Component({
  selector: 'MainModuleComp',
  template: '<router-outlet></router-outlet>',
  // standalone: true,
  // imports: [
  //   CommonModule, 
  //   MainModuleRoute,
  // ],
})
export class MainModuleComp implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}