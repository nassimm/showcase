import { Injectable } from '@angular/core';
import { Entry, Playlist } from './entry';
import { UidService } from './uid.service';

@Injectable()
export class PlaylistsService {
	playlists = [];
	selected: Playlist;

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
	loadPlaylists(playlists: Playlist[]) {
		this.playlists = playlists;
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
