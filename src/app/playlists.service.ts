import { Injectable } from '@angular/core';
import { Entry, Playlist, MostPlayedData } from './entry';
import { UidService } from './uid.service';

@Injectable()
export class PlaylistsService {
	playlists = [];
	favs= [];
	selected: Playlist;

	constructor(private uidServce: UidService) {}
	newPlaylist(name: string) {
		var newPlaylist = new Playlist(this.getNewUid(), name);
		this.playlists.push(newPlaylist);
		this.savePlaylists()
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
			const index = this.favs.indexOf(entry)
			if (index > -1) {
				this.favs.splice(index, 1);
			}
		}
		else {
			this.favs.push(entry);
		}

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
		.reduce((acc, curr) => acc.concat(curr))
		.sort((x, y) => y.played - x.played)
		.slice(0, 20);
	}
	getFavs() {
		return this.favs;
	}
	loadPlaylists() {
		if(localStorage.getItem("playlists") == null) {
			this.savePlaylists();
		}
		else {
			this.playlists = JSON.parse(localStorage.getItem("playlists"));
		}
		if(localStorage.getItem("favs") == null) {
			this.saveFavs();
		}
		else {
			this.favs = JSON.parse(localStorage.getItem("favs"));
		}
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
