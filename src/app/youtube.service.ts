import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Entry, Playlist } from './entry';


@Injectable()
export class YoutubeService {
	player: YT.Player;
	isInit = false;					//True once the player is initialized
	selected: Entry;				//Currently playing track
	selectedPlaylist: Playlist;
	playing = false;				//Player status, true = playing
	constructor() {
		
	}
	initYt(player: YT.Player) {
		this.player = player;
		this.isInit = true;
	}
	isYtInit() {return this.isInit;}
	deselect() {this.selected = null;}
	setPlaying(entry: Entry) {
		if (this.selected != entry) {
			this.player.loadVideoById(entry.id.videoId);
		}
		else {this.player.playVideo();}
		this.selected = entry;
	}
	pauseTrack() {
		this.player.pauseVideo();
	}
	prevTrack() {
		
	}
	currPlaying(): Entry {
		return this.selected;
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
	getPlaying(): Entry {
		return this.selected;
	}
	isPlaying() {
		return this.playing;
	}
	setState(playing) {
		this.playing = playing;
	}

}
