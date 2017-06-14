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
		
		if(localStorage.getItem("playlists") == null) {
			this.playlists = this.playlistsService.getPlaylists();
			localStorage.setItem("playlists", JSON.stringify(this.playlists));
		}
		else {
			this.playlists = JSON.parse(localStorage.getItem("playlists"));
			this.playlistsService.loadPlaylists(this.playlists);
		}

	}
	ngOnDestroy() {

		localStorage.setItem("playlists", JSON.stringify(this.playlistsService.getPlaylists()));
	}

}
