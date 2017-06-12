import { Component, OnInit, Input } from '@angular/core';

import { Entry } from '../entry';
import { YoutubeService } from '../youtube.service';
import * as moment from 'moment';

@Component({
	selector: 'sc-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
	@Input() entry: Entry;
	@Input() edit = false;
	
	constructor(private ytService: YoutubeService) { }
	isPlaying(entry: Entry) {
		return this.ytService.currPlaying()==entry;
	}
	playTrack(entry: Entry) {
		this.ytService.setPlaying(entry);
		// console.log(moment.duration(entry.contentDetails.duration));
	}
	ngOnInit() {
	}

}
