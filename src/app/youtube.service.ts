import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Entry } from './entry';


@Injectable()
export class YoutubeService {
	player: YT.Player;
	isInit = false;
	playing: Entry;
	
	constructor() {
		
	}
	initYt(player: YT.Player) {
		this.player = player;
		this.isInit = true;
	}
	isYtInit() {return this.isInit;}
	setPlaying(entry: Entry) {
		this.player.loadVideoById(entry.id.videoId);
		this.player.playVideo;
		this.playing = entry;
	}
	currPlaying(): Entry {
		return this.playing;
	}
	setVolume(vol: number) {
		this.player.setVolume(vol);
	}
	getVolume(): number {
		return this.player.getVolume();
	}
	transport(location: number) {
		this.player.seekTo(this.player.getDuration()*location/100, true);
	}
	getPosition(): number {
		return Number((this.player.getCurrentTime()/this.player.getDuration()*100).toFixed(1));
	}
}
