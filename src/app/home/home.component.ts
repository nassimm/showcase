import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../playlists.service';
import { BgService } from '../bg.service';
import { Entry, Playlist } from '../entry';


@Component({
	selector: 'sc-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	selections: Object;
	constructor(private bgService: BgService,
				private pService: PlaylistsService) { }

	getStyle(imgUrl: String) {
		return this.bgService.getStyle(imgUrl);
	}
	ngOnInit() {
		this.selections = this.pService.getSelections();
	}

}
