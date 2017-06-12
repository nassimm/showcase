import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';

@Component({
	selector: 'sc-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

	@Input() entry: Entry;
	addForm: FormGroup;
	selectedPlaylist: Playlist;
	constructor(private pService: PlaylistsService, private fB: FormBuilder) {
	}

	ngOnInit() {
		// this.selectedPlaylist = this.getPlaylists()[0];
		// this.addForm = this.fB.group(
		// 	{playlistId: [this.selectedPlaylist.name, Validators.required]}
		// 	);
	}

	addTrack(playlist: Playlist) {
		this.selectedPlaylist = playlist;
		if (this.selectedPlaylist.entries.some(entry => entry.id == this.entry.id)) {
			console.log("track is already in playlist");
		}
		else {
			this.selectedPlaylist.entries.push(this.entry);
			localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
		}

		
	}

	getPlaylists(): Playlist[]{
		return this.pService.getPlaylists();
	}
	getPlaylist(id: number): Playlist {
		return this.pService.getPlaylist(id);
	}
}
