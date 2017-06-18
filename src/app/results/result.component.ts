import { Component, OnInit, Input } from '@angular/core';

import { Entry, Playlist } from '../entry';
import { YoutubeService } from '../youtube.service';
import { PlaylistsService } from '../playlists.service';
import { BgService } from '../bg.service';
import * as moment from 'moment';

@Component({
	selector: 'sc-result',
	templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {
	@Input() playlist: Entry[];
	@Input() entry: Entry;
	@Input() edit = false;

	constructor(private ytService: YoutubeService,
		private pService: PlaylistsService,
		private bgService: BgService
		) { }
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying()==entry;
	}
	playTrack(entry: Entry, collection: Entry[]) {
		this.ytService.setPlaying(entry, collection);
	}
	isFav(entry: Entry) {
		return this.pService.isFav(entry);
	}
	remove(entry: Entry) {
		const index = this.pService.selected.entries.indexOf(entry);

		if (index !== -1) {
			this.pService.selected.entries.splice(index, 1);
		}
		localStorage.setItem("playlists", JSON.stringify(this.pService.getPlaylists()));
	}
	getStyle(imgUrl: String) {
		return this.bgService.getStyle(imgUrl);
	}
	handleFav(entry: Entry) {
		this.pService.handleFav(entry);
	}
	ngOnInit() {
	}

}
