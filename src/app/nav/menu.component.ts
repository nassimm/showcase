import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';

@Component({
  selector: 'sc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.newPlaylist("Blabla");
    this.newPlaylist("qgsgsdfg ");
    this.newPlaylist("shshsdh");
  }
  getPlaylists(): Playlist[] {
    return this.playlistsService.getPlaylists();
  }
  newPlaylist(name: string){
    this.playlistsService.newPlaylist(name);
  }

}
