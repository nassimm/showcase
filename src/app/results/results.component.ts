import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Entry } from '../entry';
import { PlayComponent } from '../player/play.component';
import { YoutubeApiService } from '../services/youtube-api.service';
import { YoutubePlayerService } from '../services/youtube-player.service';
import { PlaylistsDataService } from '../services/playlists-data.service';
import { Observable } from 'rxjs/Observable';


@Component({
	selector: 'sc-results',
	templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

	results = [];
	name = new FormControl();
	observeInput: Observable<string>;
	title: string;
	searchTerm: string;
	path: string;

	constructor(private route: ActivatedRoute,
		private ytService: YoutubePlayerService,
		private ytApiService: YoutubeApiService,
		private pService: PlaylistsDataService) {
	}

	playTrack(entry: Entry, collection: Entry[]) {
		this.ytService.setPlaying(entry, collection);
	}
	isYtInit() {
		return this.ytService.isYtInit();
	}
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying() === entry;
	}
	handleUrl(data) {
		this.results =
			(data[0].path === "mostplayed") ? this.pService.getMostPlayed()
			: (data[0].path === "favs") ? this.pService.getFavs()
			: (data[0].path === "recent") ? this.pService.getRecent()
			: [];
		this.path = data[0].path;
	}
	loadNextPage() {
		this.ytApiService.searchYt(this.searchTerm, true).subscribe(res => {
			this.results = [...this.results, ...res];
		})
	}
	isPlaylist() {
		return this.results.length > 0;
	}
	ngOnInit() {
		// this.searchyt();
		this.route.params.subscribe(params => {
			this.searchTerm = params['term'];
			if (this.searchTerm != undefined) {
				this.ytApiService.searchYt(params['term'])
					.subscribe(res => {
						this.results = res;

					},
					err => console.log(err),
					() => console.log());
			}
		});
		this.route.url.subscribe(data => this.handleUrl(data));
		this.route.data.subscribe(data => this.title = data[0].title);
	}

}
