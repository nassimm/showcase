import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
	constructor(private pService: PlaylistsService) {
	}

	ngOnInit() {
		this.addForm = new FormGroup({
			playlistId: new FormControl()
		});
	}

	onSubmit() {
		console.log(this.addForm.value.playlistId);
		this.selectedPlaylist = this.getPlaylist(this.addForm.value.playlistId);
		console.log(this.selectedPlaylist);
		this.selectedPlaylist.entries.push(this.entry);
	}

	getPlaylists(): Playlist[]{
		return this.pService.getPlaylists();
	}
	getPlaylist(id: number): Playlist {
		return this.pService.getPlaylist(id);
	}
}
