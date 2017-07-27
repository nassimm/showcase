import { Component, OnInit, Input } from '@angular/core';

import { PlaylistsDataService } from '../services/playlists-data.service';
import { Entry, Playlist } from '../entry';

@Component({
	selector: 'sc-add',
	templateUrl: './add.component.html',
	styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {

	@Input() entry: Entry;
	isVisible = false;
	selectedPlaylist: Playlist;
	constructor(private pService: PlaylistsDataService) {
	}

	ngOnInit() {
	}
	hideMenu() {
		this.isVisible = false;
	}
	nbTracks(playlist: Playlist) {
		return playlist.entries.length;
	}
	toggleVisible() {
		this.isVisible = !this.isVisible;
	}
	addTrack(playlist: Playlist) {
		this.pService.addTrack(playlist, this.entry)
		this.hideMenu();
	}
	handleClose(e) {
		console.log(e);
	}
	getPlaylists(): Playlist[]{
		return this.pService.getPlaylists();
	}
	// getPlaylist(id: number): Playlist {
		// 	return this.pService.getPlaylist(id);
		// }
	}
