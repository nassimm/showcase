import { Injectable } from '@angular/core';

import { Entry, Playlist } from './entry';
import {  SELECTIONS } from './selections';
import { UidService } from './uid.service';
import * as moment from 'moment'

@Injectable()
export class PlaylistsDataService {
	playlists = [];
	favs= [];
	recent = [];
	selected: Playlist;

	constructor(private uidServce: UidService) {}

	getSelections(): any {return SELECTIONS;}
	newPlaylist(name: string): Playlist {
		const newPlaylist = new Playlist(this.getNewUid(), name);
		this.playlists.push(newPlaylist);
		this.savePlaylists()
		return newPlaylist;
	}
	savePlaylists() {
		localStorage.setItem("playlists", JSON.stringify(this.playlists));
	}
	isFav(entry: Entry) {
		return this.favs.some(line=> line.id === entry.id)
	}
	handleFav(entry: Entry) {
		if (this.isFav(entry))
		{
			const index = this.favs.indexOf(this.favs.find(line=> line.id === entry.id))
			if (index > -1) {this.favs.splice(index, 1);} //Remove a fav
		}
		else { this.favs.push(entry);} //Add a fav
		this.saveFavs();

	}
	saveFavs() {
		localStorage.setItem("favs", JSON.stringify(this.favs));
	}
	getNewUid(): number {
		return this.uidServce.getNewId();
	}
	getPlaylists(): Playlist[]{
		return this.playlists;
	}
	getPlaylist(id: number): Playlist {
		return this.playlists.find(playlist => playlist.id == id);
	}

	getMostPlayed() {
		return this.getPlaylists()
		.map(x=>x.entries)
		.reduce((acc, curr) => acc.concat(curr), [])
		.filter(entry=>entry.played>0)
		.sort((x, y) => y.played - x.played)
		.slice(0, 20);
	}

	getRecent(): Entry[] {
		const now = Date.now();
		return this.getPlaylists()
		.map(x=>x.entries)
		.reduce((acc, curr) => acc.concat(curr), [])
		.filter(entry=> now - entry.addedAt < 604800000) //Number of milliseconds in a week (Shame)
		.sort((x, y) => y.addedAt - x.addedAt)
		.slice(0, 20);
	}
	getFavs() {
		return this.favs;
	}
	addTrack(playlist: Playlist, entry: Entry) {
		if (playlist.entries.some(line => line.id === entry.id)) {
			console.log("track is already in playlist");
		}
		else {
			playlist.entries.push(entry);
			this.savePlaylists();
		}
	}
	removeTrack(entry: Entry) {
		const tmpEntry = this.selected;
		const index = tmpEntry.entries.indexOf(entry);

		if (index !== -1) {
			tmpEntry.entries.splice(index, 1);
		}
		localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
	}

	loadPlaylists() {
		if(localStorage.getItem("playlists") == null) {this.savePlaylists();}
		else {this.playlists = JSON.parse(localStorage.getItem("playlists"));}

		if(localStorage.getItem("favs") == null) {this.saveFavs();}
		else {this.favs = JSON.parse(localStorage.getItem("favs"));	}

		return this.playlists;
	}
	removePlaylist(playlist: Playlist) {
		const index = this.playlists.indexOf(playlist);
		if (index !== -1) {
			this.playlists.splice(index, 1);
		}
	}
	selectPlaylist(playlist: Playlist) {
		this.selected = playlist;
	}
	ngOnInit() {

	}
}
