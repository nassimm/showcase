import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';

@Component({
  selector: 'sc-searchresults',
  template: `
  <div class="l-results">
  <div class="container-fluid">
  <div class="header">MOST PLAYED</div>
  </div>
  <div class="sc-search">
  <div class="container-fluid">
  <div class="sc-search_result" *ngFor="let entry of results;let i = index" >
  <sc-result [entry]="entry" [playlist]="results"></sc-result>
  </div>
  </div>
  </div>
  </div>
  `,
  styles: []
})
export class MostPlayedComponent implements OnInit {

  constructor(private pService: PlaylistsService) { }
  playlist: Playlist;
  ngOnInit() {
  }

}
