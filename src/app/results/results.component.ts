import { Component, OnInit } from '@angular/core';
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
	title: String;
	
	constructor(private route: ActivatedRoute,
		private ytService: YoutubeService,
		private pService: PlaylistsService) {
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
	handleUrl(data) {
		(data[0].path === "mostplayed")
		?this.results=this.pService.getMostPlayed()
		:(data[0].path === "favs")
		?this.results=this.pService.getFavs()
		:(data[0].path === "recent")
		?this.results=this.pService.getRecent()
		:console.log(data[0].path)
	}
	ngOnInit() {
		// this.searchyt();
		this.route.params.subscribe(params =>{
			if (params['term']!=undefined){
				this.ytService.searchYt(params['term'])
				.subscribe(res => this.results = res,
						err => console.log(err),
						() => console.log());
			}
		});
		this.route.url.subscribe(data=>this.handleUrl(data))
		this.route.data.subscribe(data=>this.title = data[0].title)


	}

}
