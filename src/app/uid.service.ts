import { Injectable } from '@angular/core';

@Injectable()
export class UidService {
	uid = 1;
	constructor() { }
	getNewId() {
		return this.uid++;
	}

}
