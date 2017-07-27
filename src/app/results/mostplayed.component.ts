import { Component, OnInit } from '@angular/core';

import { PlaylistsDataService } from '../services/playlists-data.service';

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

  constructor(private pService: PlaylistsDataService) { }

  ngOnInit() {


  }

}
