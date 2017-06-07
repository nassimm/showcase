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
		this.selectedPlaylist = this.getPlaylists()[0];
		this.addForm = this.fB.group(
				{playlistId: [this.selectedPlaylist.name, Validators.required]}
			);
	}

	onSubmit() {
		this.selectedPlaylist = this.getPlaylist(this.addForm.value.playlistId);
		this.selectedPlaylist.entries.push(this.entry);
		localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
	}

	getPlaylists(): Playlist[]{
		return this.pService.getPlaylists();
	}
	getPlaylist(id: number): Playlist {
		return this.pService.getPlaylist(id);
	}
}
