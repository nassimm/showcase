import { Component, OnInit, Input } from '@angular/core';

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

    <div *ngIf="path==='mostplayed' || path==='recent'">
  <p>
  Your collection is empty.
  </p>
  </div>

  <div *ngIf="path==='playlist' || path==='mostplayed' || path==='recent'">
  <p>
  Start by searching for music or <a routerLink="/">browse our selections.</a>
  </p>
  </div>
    <div *ngIf="path==='favs'">
  <p>
  Start by searching for music or <a routerLink="/">browse our selections</a> then click on the Add to favorites icon: <i class="icofont icofont-heart"></i>
  </p>
  </div>

  `,
  styles: []
})
export class NoPlaylistComponent implements OnInit {
  @Input() path: string;
  constructor() { }

  ngOnInit() {
  }

}
