import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlaylistsService} from './playlists.service';
import { Playlist } from './entry';

@Component({
	selector: 'sc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	playlists: Playlist[];
	constructor(private playlistsService: PlaylistsService) {

	}
	newPlaylist(name: string){
		this.playlistsService.newPlaylist(name);
	}

	ngOnInit() {
		
		if(localStorage.getItem("playlists") == null) {
			this.newPlaylist("Blabla");
			this.newPlaylist("Playlist 2 ");
			this.newPlaylist("A last playlist");
			this.playlists = this.playlistsService.getPlaylists();
			localStorage.setItem("playlists", JSON.stringify(this.playlists));
			console.log(JSON.stringify(this.playlists));
		}
		else {
			this.playlists = JSON.parse(localStorage.getItem("playlists"));
			console.log(this.playlists);
			this.playlistsService.loadPlaylists(this.playlists);
		}
	}
	ngOnDestroy() {

		localStorage.setItem("playlists", JSON.stringify(this.playlistsService.getPlaylists()));
	}

}
