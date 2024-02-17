import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'DashboardComp',
  templateUrl: './DashboardComp.html',
  styleUrls: ['./DashboardComp.scss'],
  // standalone: true,
  // imports: [
  //   CommonModule, 
  //   MainModuleRoute,
  // ],
})
export class DashboardComp implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}