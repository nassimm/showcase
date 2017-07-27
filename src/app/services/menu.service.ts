import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
	opened = false; //Menu state

	toggleMenu() {
		this.opened = this.opened?false:true;
	}
	closeMenu() {
		this.opened = false;
	}
	isOpened() {
		return this.opened;
	}
  constructor() { }

}
