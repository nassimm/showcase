import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { Entry, Playlist } from '../entry';
import { YoutubeService } from '../youtube.service';
import { PlaylistsService } from '../playlists.service';
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
				private sanitizer: DomSanitizer
		) { }
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying()==entry;
	}
	playTrack(entry: Entry, collection: Entry[]) {
		this.ytService.setPlaying(entry, collection);
		// console.log();
	}
	remove(entry: Entry) {
		const index = this.pService.selected.entries.indexOf(entry);

		if (index !== -1) {
			this.pService.selected.entries.splice(index, 1);
		}
		localStorage.setItem("playlists", JSON.stringify(this.pService.getPlaylists()));
	}
  getStyle() {

    const imgUrl = this.entry.thumbnails.default.url;
    const style = `background-image: url(${imgUrl})`;


    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
	ngOnInit() {
	}

}
