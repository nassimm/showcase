import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class YoutubeService {
	player: YT.Player;
	isInit = false;
	constructor() {
		
	}
	initYt(player: YT.Player) {
		this.player = player;
		this.isInit = true;
	}
	isYtInit() {return this.isInit;}

}
