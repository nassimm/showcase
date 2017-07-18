import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Entry, Playlist } from './entry';
import { PlaylistsService } from './playlists.service';


@Injectable()
export class YoutubeService {
	player: YT.Player;
	isInit = false;					//True once the player is initialized
	selected: Entry;				//Currently playing track
	selectedPlaylist: Entry[];
	playing = false;				//Player status, true = playing
	repeat = false;	
	shuffle = false;
	shuffleSave: Entry[];				//Original playlist to restore once the user turns shuffle off
	nextPageToken: String;

	constructor(private pService: PlaylistsService,
		private http: Http) {
		
	}
	getNonShuffled() {return this.shuffleSave}
	isShuffle() {
		return this.shuffle;
	}
	toggleShuffle() {
		if (this.shuffle === false) {
			if (!this.selectedPlaylist) {
				this.shuffle = true;
				return
			}
			this.selectedPlaylist = this.shufflePlaylist(this.selectedPlaylist, this.selected);
			this.shuffle = true;
		}
		else {
			this.selectedPlaylist = this.shuffleSave;
			this.shuffle = false;
		}


	}
	shufflePlaylist(array: Entry[], entry: Entry) {
		this.shuffleSave = array;
		var copy = array.filter(line => line.id !== entry.id);
		var shuffledTab = [], n = copy.length, i;
		shuffledTab.push(entry)
		while (n) {
			i = Math.floor(Math.random() * n--);
			shuffledTab.push(copy.splice(i, 1)[0]);
		}

		console.log(this.selectedPlaylist);
		return shuffledTab;
	}
	playPlaylist(collection: Entry[]) {
		if (this.selectedPlaylist !== collection && this.shuffleSave !== collection && collection[0]) {
			this.setPlaying(collection[0], collection, true)
		}
	}
	isRepeat(): Boolean {return this.repeat;}
	toggleRepeat() {
		this.repeat = this.repeat?false:true;
	}
	initYt(player: YT.Player) {
		this.player = player;
		this.isInit = true;
	}
	isYtInit() {return this.isInit;}
	deselect() {
		this.selected = null;
		this.selectedPlaylist = null;
	}
	searchYt(term: string, next = false): Observable<Entry[]> {
		return this.http.get("https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet&maxResults=10&type=video&q='"+term+"'"+((next===true)?("&pageToken="+this.nextPageToken):""))
		.map(raw => raw.json())//Getting search result items
		.do(response => this.nextPageToken = response.nextPageToken)
		.map(response => response.items)
		.map(items => items.map(entry => entry.id.videoId))
		.map(videoIds => videoIds.join()) 
		.switchMap(videoIds =>this.http.get("https://www.googleapis.com/youtube/v3/videos?id="+videoIds+"&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet,contentDetails")) 
		.map(raw => raw.json())//Getting actual video items that include duration property.
		.map(response => response.items)
		.map(items => items.map(entry=> new Entry(entry.id, entry.snippet.title, entry.contentDetails.duration, entry.contentDetails.definition, entry.snippet.publishedAt, entry.snippet.tags, entry.snippet.thumbnails)))

	}
	getNextPage() {
		return this.nextPageToken;
	}
	setPlaying(entry: Entry, collection: Entry[], allowShuffle = false) {
		if (this.selected != entry) {
			this.player.loadVideoById(entry.id);
			entry.played++;
			this.pService.savePlaylists();

			this.selectedPlaylist=(this.selectedPlaylist!==collection && allowShuffle && this.shuffle)
			?this.shufflePlaylist(collection, entry)
			:collection
		console.log(this.selectedPlaylist);
		}
		else {this.player.playVideo();}
		this.selected = entry;
	}
	pauseTrack() {
		this.player.pauseVideo();
	}
	prevTrack() {
		if (this.selectedPlaylist &&  this.selected != null) {
			const index = this.selectedPlaylist.indexOf(this.selected);
			if (index > 0) {
				this.setPlaying(this.selectedPlaylist[index-1], this.selectedPlaylist)
			}
		}
	}
	nextTrack(): boolean{
		if (this.selectedPlaylist &&  this.selected != null) {
			const index = this.selectedPlaylist.indexOf(this.selected);
			if (this.selectedPlaylist[index+1]) {
				this.setPlaying(this.selectedPlaylist[index+1], this.selectedPlaylist)
				return true;
			}
			else if (this.repeat === true) {
				this.setPlaying(this.selectedPlaylist[0], this.selectedPlaylist)
				return true;
			}
		}
		return false
	}
	currPlaying(): Entry {
		return this.selected;
	}
	setVolume(vol: number) {
		this.player.setVolume(vol);
	}
	getVolume(): number {
		return this.player.getVolume();
	}
	transport(location: number) {
		this.player.seekTo(this.player.getDuration()*location/100, true);
	}
	getPosition(): number {
		return Number((this.player.getCurrentTime()/this.player.getDuration()*100).toFixed(1));
	}
	getCurrentTime() {
		return this.player.getCurrentTime()
	}

	getDuration() {
		return this.player.getDuration()
	}
	getPlaying(): Entry {
		return this.selected;
	}
	isPlaying() {
		return this.playing;
	}
	setState(playing) {
		this.playing = playing;
	}

}
