import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Entry, Playlist } from './entry';
import { PlaylistsDataService } from './playlists-data.service';


@Injectable()
export class YoutubePlayerService {
	player: YT.Player;
	isInit = false;					//True once the player is initialized
	selected: Entry;				//Currently playing track
	selectedPlaylist: Entry[];
	playing = false;				//Player status, true = playing
	repeat = false;
	shuffle = false;
	shuffleSave: Entry[];			//Original playlist to restore once the user turns shuffle off

	constructor(private pService: PlaylistsDataService,
		private http: Http) { }

	currPlaying(): Entry {
		return this.selected;
	}
	deselect() {
		this.selected = null;
		this.selectedPlaylist = null;
	}
	getCurrentTime(): number {
		return this.player.getCurrentTime();
	}
	getDuration(): number {
		return this.player.getDuration();
	}
	getNonShuffled() { return this.shuffleSave; }
	getPlaying(): Entry {
		return this.selected;
	}
	getPosition(): number {
		return Number((this.player.getCurrentTime() / this.player.getDuration() * 100).toFixed(1));
	}
	getVolume(): number {
		return this.player.getVolume();
	}
	initYt(player: YT.Player) {
		this.player = player;
		this.isInit = true;
	}
	isPlaying(): boolean {
		return this.playing;
	}
	isRepeat(): boolean { return this.repeat; }
	isShuffle() {
		return this.shuffle;
	}
	isYtInit(): boolean { return this.isInit; }
	nextTrack(): boolean {
		if (this.selectedPlaylist && this.selected != null) {
			const index = this.selectedPlaylist.indexOf(this.selected);
			if (this.selectedPlaylist[index + 1]) {
				this.setPlaying(this.selectedPlaylist[index + 1], this.selectedPlaylist);
				return true;
			}
			else if (this.repeat === true) {
				this.setPlaying(this.selectedPlaylist[0], this.selectedPlaylist);
				return true;
			}
		}
		return false;
	}
	pauseTrack() {
		this.player.pauseVideo();
	}
	playPlaylist(collection: Entry[]) {
		if (this.selectedPlaylist !== collection && this.shuffleSave !== collection && collection[0]) {
			this.setPlaying(collection[0], collection, true);
		}
	}
	prevTrack() {
		if (this.selectedPlaylist && this.selected != null) {
			const index = this.selectedPlaylist.indexOf(this.selected);
			if (index > 0) {
				this.setPlaying(this.selectedPlaylist[index - 1], this.selectedPlaylist);
			}
		}
	}
	setPlaying(entry: Entry, collection: Entry[], allowShuffle = false) {
		if (this.selected != entry) {
			this.player.loadVideoById(entry.id);
			entry.played++;
			this.pService.savePlaylists();
			this.selectedPlaylist = (this.selectedPlaylist !== collection && allowShuffle && this.shuffle)
				? this.shufflePlaylist(collection, entry)
				: collection;
			// console.log(JSON.stringify(entry));
		}
		else { this.player.playVideo(); }
		this.selected = entry;
	}
	setState(playing) {
		this.playing = playing;
	}
	setVolume(vol: number) {
		this.player.setVolume(vol);
	}
	shufflePlaylist(array: Entry[], entry: Entry) {
		this.shuffleSave = array;
		let copy = array.filter(line => line.id !== entry.id);
		let shuffledTab = [], n = copy.length, i;
		shuffledTab.push(entry);
		while (n) {
			i = Math.floor(Math.random() * n--);
			shuffledTab.push(copy.splice(i, 1)[0]);
		}

		console.log(this.selectedPlaylist);
		return shuffledTab;
	}
	toggleRepeat() {
		this.repeat = !this.repeat;
	}
	toggleShuffle() {
		if (this.shuffle === false) {
			if (!this.selectedPlaylist) {
				this.shuffle = true;
			}
			else {
				this.selectedPlaylist = this.shufflePlaylist(this.selectedPlaylist, this.selected);
				this.shuffle = true;
			}
		}
		else {
			this.selectedPlaylist = this.shuffleSave;
			this.shuffle = false;
		}
	}
	transport(location: number) {
		this.player.seekTo(this.player.getDuration() * location / 100, true);
	}
}
