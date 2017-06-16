import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Entry, Playlist } from './entry';
import { PlaylistsService } from './playlists.service';


@Injectable()
export class YoutubeService {
	player: YT.Player;
	isInit = false;					//True once the player is initialized
	selected: Entry;				//Currently playing track
	selectedPlaylist: Entry[];
	playing = false;				//Player status, true = playing
	constructor(private pService: PlaylistsService) {
		
	}
	initYt(player: YT.Player) {
		this.player = player;
		this.isInit = true;
	}
	isYtInit() {return this.isInit;}
	deselect() {
		this.selected = null;
		this.selectedPlaylist = null;
	}
	setPlaying(entry: Entry, collection: Entry[]) {
		if (this.selected != entry) {
			this.player.loadVideoById(entry.id);
			this.selectedPlaylist = collection;
			this.pService.incrementMostPlayed(entry.id);
		}
		else {this.player.playVideo();}
		this.selected = entry;
	}
	pauseTrack() {
		this.player.pauseVideo();
	}
	prevTrack() {
		if (this.selectedPlaylist &&  this.selected != null) {
			console.log(this.selectedPlaylist);
			const index = this.selectedPlaylist.indexOf(this.selected);
			if (index > 0) {
				this.setPlaying(this.selectedPlaylist[index-1], this.selectedPlaylist)
			}
		}
	}
	nextTrack(): boolean{
		if (this.selectedPlaylist &&  this.selected != null) {
			const index = this.selectedPlaylist.indexOf(this.selected);
			if (this.selectedPlaylist[index+1]) {
				this.setPlaying(this.selectedPlaylist[index+1], this.selectedPlaylist)

				return true;
			}
		}
		return false
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
