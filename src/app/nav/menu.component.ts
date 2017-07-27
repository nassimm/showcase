import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlaylistsDataService } from '../services/playlists-data.service';
import { Entry, Playlist } from '../entry';
import { BgService } from '../services/bg.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'sc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  menu = [
    { name: "Home", action: "/", icon: "icofont-ui-home" },
    { name: "Favorite tracks", action: "/favs", icon: "icofont-heart" },
    { name: "Most played", action: "/mostplayed", icon: "icofont-star" },
    { name: "Recently added", action: "/recent", icon: "icofont-ui-calendar" }
  ]
  shareUrl = "https://nassimm.github.io/showcase/"
  social = [
    { name: "Facebook", icon: "icofont-social-facebook" },
    { name: "Twitter", icon: "icofont-social-twitter" },
    { name: "Google Plus", icon: "icofont-social-google-plus" },
    { name: "Instagram", icon: "icofont-social-instagram" }
  ]
  playlists: Playlist[];

  constructor(private PlaylistsDataService: PlaylistsDataService,
    private router: Router,
    private bgService: BgService,
    private mService: MenuService) { }

  ngOnInit() {
    this.playlists = this.getPlaylists();
  }

  closeMenu() {
    this.mService.closeMenu();
  }
  getPlaylists(): Playlist[] {
    return this.PlaylistsDataService.getPlaylists();
  }
  getStyle(imgUrl: String) {
    return this.bgService.getStyle(imgUrl);
  }
  goFavs() {
    this.router.navigateByUrl('/favs');
  }
  goHome() {
    this.router.navigateByUrl('/');
  }
  goMostPlayed() {
    this.router.navigateByUrl('/mostplayed');
  }
  goRecent() {
    this.router.navigateByUrl('/recent');
  }
  isOpened() {
    return this.mService.isOpened()
  }
  navigate(link) {
    link.action.call(this);
  }
  nbTracks(playlist: Playlist) {
    return playlist.entries.length;
  }
  noPlaylist() {
    return this.playlists.length == 0;
  }
  toggleMenu() {
    this.mService.toggleMenu();
  }
}
