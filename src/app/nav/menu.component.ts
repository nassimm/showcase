import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';
import { FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'sc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {

  }
  getPlaylists(): Playlist[] {
    return this.playlistsService.getPlaylists();
  }
  newPlaylist(form: FormGroup) {
  	this.playlistsService.newPlaylist(form.value.playlistName);
  }

}
