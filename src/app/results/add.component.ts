import { Component, OnInit, Input } from '@angular/core';

import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';

@Component({
	selector: 'sc-add',
	templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

	@Input() entry: Entry;
	@Input() pop: any;
	selectedPlaylist: Playlist;
	constructor(private pService: PlaylistsService) {
	}

	ngOnInit() {
	}

	addTrack(playlist: Playlist) {
		this.selectedPlaylist = playlist;
		if (this.selectedPlaylist.entries.some(entry => entry.id === this.entry.id)) {
			console.log("track is already in playlist");
		}
		else {
			this.selectedPlaylist.entries.push(this.entry);
			localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
			this.pService.savePlaylists();
		}

		
	}

	getPlaylists(): Playlist[]{
		return this.pService.getPlaylists();
	}
	// getPlaylist(id: number): Playlist {
	// 	return this.pService.getPlaylist(id);
	// }
}
