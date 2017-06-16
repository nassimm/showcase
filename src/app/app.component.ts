import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlaylistsService} from './playlists.service';
import { UidService} from './uid.service';
import { Playlist } from './entry';

@Component({
	selector: 'sc-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
	playlists: Playlist[];
	constructor(private playlistsService: PlaylistsService,
		private uidService: UidService) {

	}
	newPlaylist(name: string){
		this.playlistsService.newPlaylist(name);
	}

	ngOnInit() {
		this.playlists = this.playlistsService.loadPlaylists();

	}
	ngOnDestroy() {

		localStorage.setItem("playlists", JSON.stringify(this.playlistsService.getPlaylists()));
	}

}
