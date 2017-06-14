import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Entry } from '../entry';
import { YoutubeService } from '../youtube.service';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'sc-player',
	templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
	volumeBar = new FormControl();
	transportBar = new FormControl();
	trackPosition = 0;
	transportInterval: number;
	private id: string = '';
	
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
		}, 1000)
	}
	onStateChange(event){
		console.log('player state', event.data);
		if (event.data === 1 || event.data === 3) {
			this.ytService.setState(true);
		}
		else{
			this.ytService.setState(false);
		}
		if (event.data === 0 && this.ytService.nextTrack()) {
			this.ytService.deselect();

		}
	}
	getPosition() {
		return this.ytService.getPosition();
	}
	isYtInit(){
		return this.ytService.isYtInit();
	}
	getPlaying(): Entry {
		return this.ytService.getPlaying();
	}
	ngOnInit() {

	}



}
