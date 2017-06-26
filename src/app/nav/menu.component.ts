import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlaylistsService } from '../playlists.service';
import { Entry, Playlist } from '../entry';
import { BgService } from '../bg.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'sc-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu = [
  {name: "Home", action: "/", icon: "icofont-ui-home"},
  {name: "Favorite tracks", action: "/favs", icon: "icofont-heart"},
  {name: "Most played", action: "/mostplayed", icon: "icofont-star"},
  {name: "Recently added", action: "/recent", icon: "icofont-ui-calendar"}
  ]
  shareUrl = "https://nassimm.github.io/showcase/"
  social = [
  {name: "Facebook", icon: "icofont-social-facebook"},
  {name: "Twitter",  icon: "icofont-social-twitter"},
  {name: "Google Plus", icon: "icofont-social-google-plus"},
  {name: "Instagram", icon: "icofont-social-instagram"}
  ]
  constructor(private playlistsService: PlaylistsService,
              private router:Router,
              private bgService: BgService,
              private mService: MenuService) { }
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
  goRecent() {
    this.router.navigateByUrl('/recent')
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
  isOpened() {
    return this.mService.isOpened()
  }
  toggleMenu() {
    this.mService.toggleMenu();
  }
  closeMenu() {
    this.mService.closeMenu();
  }
  getStyle(imgUrl: String) {
    return this.bgService.getStyle(imgUrl);
  }

}
