import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer  } from '@angular/platform-browser';

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
	trackPosition = 0;			//Position in %
	currentPos = 0;				//Current time in absolute
	trackLength = 0;
	trackVolume = 0;
	transportInterval: number;
	
	constructor(private ytService: YoutubeService
		) { }

	savePlayer (player) {
		this.ytService.initYt(player);
		let volumeInit = this.ytService.getVolume();
		this.volumeBar.setValue(volumeInit);
		this.trackVolume = volumeInit;
		this.volumeBar.valueChanges.subscribe(data =>
			this.ytService.setVolume(Number(data))
			);
		this.volumeBar.valueChanges.subscribe(data =>
			this.trackVolume = data
			);
		this.transportBar.valueChanges.subscribe(data =>
			this.ytService.transport(Number(data))
			);
		Observable.interval(200)
		.subscribe(() => this.handleUiChange())

	}
	handleUiChange() {
		this.trackPosition = this.getPosition();
		this.currentPos = this.ytService.getCurrentTime();
		this.trackLength = this.ytService.getDuration();
	}
	onStateChange(event){
		console.log('player state', event.data);
		if (event.data === 1 || event.data === 3) {
			this.ytService.setState(true);
		}
		else{
			this.ytService.setState(false);
		}
		if (event.data === 0 && !this.ytService.nextTrack()) {
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
