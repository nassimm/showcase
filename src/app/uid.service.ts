import { Injectable } from '@angular/core';

@Injectable()
export class UidService {
	constructor() { }
	getNewId() {
		return new Date().valueOf();
	}

}
