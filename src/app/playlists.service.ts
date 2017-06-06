import { Injectable } from '@angular/core';
import { Entry, Playlist } from './entry';
import { UidService } from './uid.service';

@Injectable()
export class PlaylistsService {
	playlists = [];
	constructor(private uidServce: UidService) {}
	newPlaylist(name: string) {
		var newPlaylist = new Playlist(this.getNewUid(), name);
		this.playlists.push(newPlaylist);
		console.log(newPlaylist);
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
	ngOnInit() {

	}
}
