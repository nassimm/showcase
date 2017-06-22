import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'sc-shuffle',
  template: `

  <i class="icofont icofont-random controls_additional_button " [class.isActive]="isShuffle()" (click)=toggleShuffle()></i>
  `,
  styles: []
})
export class ShuffleComponent implements OnInit {

  constructor(private ytService: YoutubeService) { }
  toggleShuffle() {
    this.ytService.toggleShuffle();
  }
  isShuffle(): Boolean {
    return this.ytService.isShuffle();
  }
  ngOnInit() {
  }

}
