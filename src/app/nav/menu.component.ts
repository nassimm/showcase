import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';

@Component({
  selector: 'sc-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu = [
  {name: "Home", action: this.goHome, icon: "icofont-ui-home"},
  {name: "Favorite tracks", action: this.goFavs, icon: "icofont-heart"},
  {name: "Most played", action: this.goMostPlayed, icon: "icofont-star"},
  {name: "Recently added", action: this.goHome, icon: "icofont-ui-calendar"}
  ]
  social = [
  {name: "Facebook", icon: "icofont-social-facebook"},
  {name: "Twitter",  icon: "icofont-social-twitter"},
  {name: "Google Plus", icon: "icofont-social-google-plus"},
  {name: "Instagram", icon: "icofont-social-instagram"}
  ]
  constructor(private playlistsService: PlaylistsService,
    private router:Router) { }
  playlists: Playlist[];
  ngOnInit() {
  	this.playlists = this.getPlaylists();
  }

  getPlaylists(): Playlist[] {
    return this.playlistsService.getPlaylists();
  }
  navigate(link){
    link.action.call(this);
  }
  goHome() {
    this.router.navigateByUrl('/')
  }
  goMostPlayed() {
    this.router.navigateByUrl('/mostplayed')
  }
  goFavs() {
    this.router.navigateByUrl('/favs')
  }
  noPlaylist(){
    return this.playlists.length == 0;
  }
  nbTracks(playlist: Playlist) {
  	return playlist.entries.length;
  }


}
