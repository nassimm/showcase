import { Injectable } from '@angular/core';
import { Entry, Playlist, MostPlayedData } from './entry';
import { UidService } from './uid.service';

@Injectable()
export class PlaylistsService {
	playlists = [];
	selected: Playlist;
	mostPlayed = [];

	constructor(private uidServce: UidService) {}
	newPlaylist(name: string) {
		var newPlaylist = new Playlist(this.getNewUid(), name);
		this.playlists.push(newPlaylist);
		localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
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
	incrementMostPlayed(id: string) {
		const index = this.mostPlayed.findIndex(x=>x.id === id);
		if (index === -1) {
			var entry = new MostPlayedData(id, 1);
			this.mostPlayed.push(entry);
			localStorage.setItem("mostPlayed", JSON.stringify(this.mostPlayed));
		}
		else {
			this.mostPlayed[index].times++;
			localStorage.setItem("mostPlayed", JSON.stringify(this.mostPlayed));
		}
	}
	loadPlaylists() {
		if(localStorage.getItem("playlists") == null) {
			localStorage.setItem("playlists", JSON.stringify(this.playlists));
		}
		else {
			this.playlists = JSON.parse(localStorage.getItem("playlists"));
		}
		if(localStorage.getItem("mostPlayed") == null) {
			localStorage.setItem("mostPlayed", JSON.stringify(this.mostPlayed));
		}
		else {
			this.mostPlayed = JSON.parse(localStorage.getItem("mostPlayed"));
		}
		return this.playlists;
	}
	removePlaylist(playlist: Playlist) {
	const index = this.playlists.indexOf(playlist);
		if (index !== -1) {
			this.playlists.splice(index, 1);
		}
	}
	getMostPlayed() {return this.mostPlayed}
	selectPlaylist(playlist: Playlist) {
		this.selected = playlist;
	}
	ngOnInit() {

	}
}
