import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Entry } from '../entry';
import { PlayComponent } from '../player/play.component';
import { YoutubeService } from '../youtube.service';
import { PlaylistsService } from '../playlists.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
	selector: 'sc-results',
	templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

	results: Object;
	name = new FormControl();
	observeInput: Observable<string>;

	constructor(private http: Http,
		private route: ActivatedRoute,
		private ytService: YoutubeService,
		private pService: PlaylistsService) {
	}
	searchyt(term: string) {
		this.http.get("https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet&maxResults=10&type=video&q='"+term+"'")
		.map(raw => raw.json())//Getting search result items
		.map(response => response.items)
		.map(items => items.map(entry => entry.id.videoId))
		.map(videoIds => videoIds.join()) 
		.switchMap(videoIds =>this.http.get("https://www.googleapis.com/youtube/v3/videos?id="+videoIds+"&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet,contentDetails")			) 
		.map(raw => raw.json())//Getting actual video items that include duration property.
		.map(response => response.items)
		.map(items => items.map(entry=> new Entry(entry.id, entry.snippet.title, entry.contentDetails.duration, entry.contentDetails.definition, entry.snippet.publishedAt, entry.snippet.tags, entry.snippet.thumbnails)))
		.subscribe(res => this.results = res,
			err => console.log(err),
			() => console.log());
	}
	playTrack(entry: Entry, collection: Entry[]) {
		this.ytService.setPlaying(entry, collection);
	}
	isYtInit() {
		return this.ytService.isYtInit();
	}
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying()==entry;
	}
	ngOnInit() {
		// this.searchyt();
		this.route.params.subscribe(params =>{
			if (params['term']!=undefined){
				this.searchyt(params['term'])
			}
		});
	}

}
