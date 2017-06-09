import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'sc-prev',
  template: `
  <a (click)= "prevTrack()">  
  <div class="control_small"><i class="icofont icofont-ui-previous"></i></div>
  </a>
  `,
  styles: []
})
export class PrevComponent implements OnInit {

  constructor(private ytService: YoutubeService) { }
  prevTrack() {
   this.ytService.prevTrack();
  }
  ngOnInit() {
  }

}
