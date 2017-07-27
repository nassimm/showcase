import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlaylistsDataService} from './services/playlists-data.service';
import { UidService} from './services/uid.service';
import { Playlist } from './entry';

@Component({
	selector: 'sc-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
	playlists: Playlist[];
	constructor(private PlaylistsDataService: PlaylistsDataService,
		private uidService: UidService) {

	}
	newPlaylist(name: string){
		this.PlaylistsDataService.newPlaylist(name);
	}

	ngOnInit() {
		this.PlaylistsDataService.loadPlaylists();
		this.playlists = this.PlaylistsDataService.getPlaylists();


	}
	ngOnDestroy() {

		localStorage.setItem("playlists", JSON.stringify(this.PlaylistsDataService.getPlaylists()));
	}

}
