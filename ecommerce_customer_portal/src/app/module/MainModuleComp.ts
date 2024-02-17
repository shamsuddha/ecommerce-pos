import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'MainModuleComp',
  templateUrl: './MainModuleComp.html',
  styleUrl: './MainModuleComp.scss'
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