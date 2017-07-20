import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'sc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  constructor(private mService: MenuService) { }
  toggleMenu() {
  	this.mService.toggleMenu();
  }
  ngOnInit() {
  }

}
