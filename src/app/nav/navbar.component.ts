import { Component } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'sc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent {

  constructor(private mService: MenuService) { }
  toggleMenu() {
  	this.mService.toggleMenu();
  }

}
