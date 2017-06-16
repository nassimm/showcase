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
	trackPosition = 0;
	trackVolume = 0;
	transportInterval: number;
	
	constructor(private ytService: YoutubeService,
		private sanitizer: DomSanitizer
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
		Observable.interval(600)
		.subscribe(() => this.trackPosition = this.getPosition())

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
	getStyle() {
		let entry = this.getPlaying();
		const imgUrl = entry.thumbnails.default.url;
		const style = `background-image: url(${imgUrl})`;
		return this.sanitizer.bypassSecurityTrustStyle(style);
	}
	ngOnInit() {

	}



}
