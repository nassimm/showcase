import { Component, OnInit, Input } from '@angular/core';

import { Entry, Playlist } from '../entry';
import { YoutubeService } from '../youtube.service';
import { PlaylistsService } from '../playlists.service';
import * as moment from 'moment';

@Component({
	selector: 'sc-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
	@Input() playlist: Entry[];
	@Input() entry: Entry;
	@Input() edit = false;

	constructor(private ytService: YoutubeService,
				private pService: PlaylistsService
		) { }
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying()==entry;
	}
	playTrack(entry: Entry, collection: Entry[]) {
		this.ytService.setPlaying(entry, collection);
		// console.log(moment.duration(entry.contentDetails.duration));
	}
	remove(entry: Entry) {
		const index = this.pService.selected.entries.indexOf(entry);

		if (index !== -1) {
			this.pService.selected.entries.splice(index, 1);
		}
		localStorage.setItem("playlists", JSON.stringify(this.pService.getPlaylists()));
	}
	ngOnInit() {
	}

}
