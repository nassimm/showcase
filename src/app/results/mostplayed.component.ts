import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from '../playlists.service';

@Component({
  selector: 'sc-mostplayed',
  template: `
    <p>
      mostplayed Works!
    </p>
  `,
  styles: []
})
export class MostplayedComponent implements OnInit {

  constructor(private pService: PlaylistsService) { }

  ngOnInit() {


  }

}
