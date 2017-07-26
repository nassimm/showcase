import { Component, OnInit } from '@angular/core';
import { PlaylistsDataService } from '../playlists-data.service';
import { BgService } from '../bg.service';
import { Entry, Playlist } from '../entry';


@Component({
	selector: 'sc-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	selections: any;
	constructor(private bgService: BgService,
				private pService: PlaylistsDataService) { }

	getStyle(imgUrl: String) {
		return this.bgService.getStyle(imgUrl);
	}
	ngOnInit() {
		this.selections = this.pService.getSelections();
	}

}
