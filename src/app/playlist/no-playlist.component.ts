import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-no-playlist',
  template: `

  <div *ngIf="path==='playlist'">
  <p>
  This playlist is currently empty.
  </p>
  </div>

  <div *ngIf="path==='favs'">
  <p>
  You have no favorite yet.
  </p>
  </div>

  <div *ngIf="path==='mostplayed'">
  <p>
Your playlists haven't been played yet.
  </p>
  </div>
  <div *ngIf="path==='recent'">
  <p>
 No track has been added recently.
  </p>
  </div>
  <div *ngIf="path==='playlist' || path==='mostplayed' || path==='recent'">
  <p>
  Start by searching for music or <a routerLink="/">browse our selections.</a>
  </p>
  </div>
  <div *ngIf="path==='favs'">
  <p>
  Start by searching for music and click on the Add to favorites icon: <i class="icofont icofont-heart"></i>
  </p>
  </div>

  `,
  styles: []
})
export class NoPlaylistComponent {
  @Input() path: string;

  constructor() { }
}
