import { Component, OnInit } from "@angular/core";

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