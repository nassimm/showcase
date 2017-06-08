import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { YoutubeService } from '../youtube.service';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'sc-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
	volumeBar = new FormControl();
	transportBar = new FormControl();
	trackPosition = 0;
	transportInterval: number;
	private id: string = 'KhvOFA9v_-Y';
	
	constructor(private ytService: YoutubeService) { }

	savePlayer (player) {
		this.ytService.initYt(player);
		this.volumeBar.setValue(this.ytService.getVolume());
		this.volumeBar.valueChanges.subscribe(data =>
			this.ytService.setVolume(Number(data))
			);
		this.transportBar.valueChanges.subscribe(data =>
			this.ytService.transport(Number(data))
			);
		setInterval(() => {
			this.trackPosition = this.getPosition();
			console.log(this.trackPosition);
		}, 1000)
	}
	onStateChange(event){
		console.log('player state', event.data);
		if (event.data === 0) {
			this.ytService.setPlaying(null);
		}
	}
	getPosition() {
		return this.ytService.getPosition();
	}
	isYtInit(){
		return this.ytService.isYtInit();
	}
	ngOnInit() {

	}



}
