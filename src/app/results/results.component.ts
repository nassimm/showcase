import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Entry } from '../entry';
import { YoutubeService } from '../youtube.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
	selector: 'sc-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	results: Object;
	name = new FormControl();
	observeInput: Observable<string>;

	constructor(private http: Http,
		private route: ActivatedRoute,
		private ytService: YoutubeService) {
	}
	searchyt(term: string) {
		this.http.get("https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet&maxResults=20&type=video&q='"+term+"'")
		.map(res => res.json())
		.subscribe(data => this.results = data.items,
			err => console.log(err),
			() => console.log());
	}
	playTrack(entry: Entry) {
		this.ytService.setPlaying(entry);
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
