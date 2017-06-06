import { Injectable } from '@angular/core';

@Injectable()
export class UidService {
	uid = 0;
	constructor() { }
	getNewId(): number{
		return this.uid++;
	}

}
