import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Playlist, Entry } from '../entry';
import { PlaylistsDataService } from '../playlists-data.service';
import { YoutubePlayerService } from '../youtube-player.service';
import { BgService } from '../bg.service';
import * as moment from 'moment';

@Component({
	selector: 'sc-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

	@Input() playlist;
	allowEdit = true;
	edit = false;
	duration;

	constructor(private route: ActivatedRoute,
		private pService: PlaylistsDataService,
		private ytService: YoutubePlayerService,
		private rService: Router,
		private bgService: BgService) {
	}
	handleUrl(data, param) {

		if (data[0].path === "selections") {
			this.playlist = this.pService.getSelections().main[Number(param) - 1];
			this.allowEdit = false
		}
		else { this.playlist = this.pService.getPlaylist(Number(param)) }

		if (this.playlist != undefined) {
			this.pService.selectPlaylist(this.playlist)
		}
		else {
			this.rService.navigateByUrl('/')
		}
	}
	ngOnInit() {
		this.route.params.subscribe(params => {
			if (params['id'] != undefined) {
				this.route.url.subscribe(data => this.handleUrl(data, params['id']))

			}
		});
	}
	nbTracks(): String {
		return this.playlist.entries.length.toString()
	}
	totalLength() {
		return this.playlist.entries
			.map(entry => moment.duration(entry.duration))
			.reduce((acc, curr) => acc.add(curr), moment.duration(0, 'seconds'))
	}
	toggleEdit() {
		this.edit = !this.edit;
	}
	getStyle(imgUrl: String) {
		return this.bgService.getStyle(imgUrl);
	}
	getPlaylists(): Playlist[] {
		return this.pService.getPlaylists();
	}
	getPlaylist(id: number) {
		return this.pService.getPlaylist(id);
	}
	playPlaylist() { this.ytService.playPlaylist(this.playlist.entries); }
	isYtInit() {
		return this.ytService.isYtInit();
	}

	isPlaying(entry: Entry) {
		return this.ytService.currPlaying() == entry;
	}

	isEdit(): Boolean {
		return this.allowEdit;
	}
	renamePlaylist(rename: FormGroup) {

		if (rename.value.name) {
			this.playlist.name = rename.value.name;
			localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
		}
	}
	removePlaylist() {
		this.pService.removePlaylist(this.playlist);
		this.rService.navigateByUrl("/");
		localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
	}


}
