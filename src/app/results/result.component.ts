import { Component, OnInit, Input } from '@angular/core';

import { Entry, Playlist } from '../entry';
import { YoutubePlayerService } from '../youtube-player.service';
import { PlaylistsDataService } from '../playlists-data.service';
import { BgService } from '../bg.service';
import * as moment from "moment";

@Component({
	selector: "sc-result",
	templateUrl: "./result.component.html",
	styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
	@Input() playlist: Entry[];
	@Input() entry: Entry;
	@Input() edit = false;
	isVisible = false;

	constructor(private ytService: YoutubePlayerService,
		private pService: PlaylistsDataService,
		private bgService: BgService
		) { }
	hideMenu() {
		this.isVisible = false;
	}
	toggleVisible() {
		this.isVisible = !this.isVisible;
	}
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying()===entry;
	}
	playTrack(entry: Entry, collection: Entry[]) {
		this.ytService.setPlaying(entry, collection);
	}
	isFav(entry: Entry) {
		return this.pService.isFav(entry);
	}
	remove(entry: Entry) {
		const index = this.pService.removeTrack(entry);
	}
	getStyle(imgUrl: String) {
		return this.bgService.getStyle(imgUrl);
	}
	handleFav(entry: Entry) {
		this.pService.handleFav(entry);
	}
	downloadTrack() {
		 window.open("http://deturl.com/www.youtube.com/watch?v=" + this.entry.id, "_blank");
	}
	ngOnInit() {
	}

}
