import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup } from '@angular/forms';

import { Playlist, Entry } from '../entry';
import { PlaylistsService } from '../playlists.service';
import { YoutubeService } from '../youtube.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
	selector: 'sc-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

	playlist: Playlist;
	edit = false;
	constructor(private route: ActivatedRoute,
		private pService: PlaylistsService,
		private ytService: YoutubeService,
		private rService: Router) { 
	}

	ngOnInit() {

		this.route.params.subscribe(params =>{
			if (params['id']!=undefined){
				this.playlist = this.pService.getPlaylist(Number(params['id']))
				console.dir(this.playlist);
			}
		});
	}
	getPlaylists(): Playlist[]{
		return this.pService.getPlaylists();
	}
	getPlaylist(id: number) {
		return this.pService.getPlaylist(id);
	}
	isYtInit() {
		return this.ytService.isYtInit();
	}
	playTrack(entry: Entry) {
		this.ytService.player.loadVideoById(entry.id.videoId);
		this.ytService.player.playVideo;
	}
	remove(entry: Entry) {
		const index = this.playlist.entries.indexOf(entry);

		if (index !== -1) {
			this.playlist.entries.splice(index, 1);
		}
		localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
	}
	editPlaylist() {
		this.edit===false?this.edit=true:this.edit=false;
	}
	isEdit(): Boolean {
		return this.edit;
	}
	renamePlaylist(rename: FormGroup) {
		this.playlist.name = rename.value.name;
		localStorage.setItem("playlists", JSON.stringify(this.getPlaylists()));
	}
	removePlaylist() {
		this.pService.removePlaylist(this.playlist);
		this.rService.navigateByUrl("/");
	}


}
