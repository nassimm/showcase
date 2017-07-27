import { Component, OnInit, Input } from '@angular/core';

import { BgService } from '../services/bg.service';

@Component({
	selector: 'sc-currently-playing',
	templateUrl: './currently-playing.component.html',
	styleUrls: ["currently-playing.component.scss"]
})

export class CurrentlyPlayingComponent implements OnInit {
	@Input() entry;

	constructor(private bgService: BgService) { }
	
	getStyle(imgUrl) {
		return this.bgService.getStyle(imgUrl);
	}
	ngOnInit() {
	}

}
