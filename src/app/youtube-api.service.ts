import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Entry, Playlist } from './entry';
import { PlaylistsDataService } from './playlists-data.service';


@Injectable()
export class YoutubeApiService {
	nextPageToken: string;

	constructor(private http: Http) {	}

	searchYt(term: string, next = false): Observable<Entry[]> { //Make sure to restrict by domain once a real API key is used
		return this.http.get("https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet&maxResults=10&type=video&q='" + term + "'" + ((next === true) ? ("&pageToken=" + this.nextPageToken) : ""))
			.map(raw => raw.json())//Getting search result items
			.do(response => this.nextPageToken = response.nextPageToken)
			.map(response => response.items)
			.map(items => items.map(entry => entry.id.videoId))
			.map(videoIds => videoIds.join())
			.switchMap(videoIds => this.http.get("https://www.googleapis.com/youtube/v3/videos?id=" + videoIds + '&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet,contentDetails'))
			.map(raw => raw.json())// Getting actual video items that include duration property.
			.map(response => response.items)
			.map(items => items.map(entry => new Entry(entry.id, entry.snippet.title, entry.contentDetails.duration, entry.contentDetails.definition, entry.snippet.publishedAt, entry.snippet.tags, entry.snippet.thumbnails)));

	}
}
