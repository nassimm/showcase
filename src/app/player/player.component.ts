import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
	selector: 'sc-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {


	constructor(private ytService: YoutubeService) { }
	private id: string = 'qDuKsiwS5xw';

	savePlayer (player) {
		this.ytService.initYt(player);
	}
	onStateChange(event){
		console.log('player state', event.data);
	}

	ngOnInit() {

	}



}
