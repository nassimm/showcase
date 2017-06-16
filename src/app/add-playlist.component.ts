import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';

import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'sc-add-playlist',
  template: `
  <form #newPlaylistForm="ngForm" (ngSubmit)="newPlaylist(newPlaylistForm)">
    <input ngModel name="playlistName" required="" placeholder="New Playlist">
    <button type="submit" [disabled]="!newPlaylistForm.form.valid">Add new Playlist</button>
  </form>
  `,
  styles: []
})
export class AddPlaylistComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService) { }
  newPlaylist(form: FormGroup) {
    this.playlistsService.newPlaylist(form.value.playlistName);
  }
  ngOnInit() {
  }

}
