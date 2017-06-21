import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-no-playlist',
  template: `
    <p>
      Sorry, nothing here !
    </p>
    <p>
      Start by searching for music or <a routerLink="/">browse our selections.</a>
    </p>
  `,
  styles: []
})
export class NoPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
