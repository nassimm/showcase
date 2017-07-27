import { Component } from '@angular/core';

import { YoutubePlayerService } from '../services/youtube-player.service';

@Component({
  selector: 'sc-shuffle',
  template: `

  <i class="icofont icofont-random loopAndShuffleGroup_button " [class.isActive]="isShuffle()" (click)=toggleShuffle()></i>
  `,
  styles: []
})
export class ShuffleComponent {
  constructor(private ytService: YoutubePlayerService) { }

  toggleShuffle() {
    this.ytService.toggleShuffle();
  }
  isShuffle(): Boolean {
    return this.ytService.isShuffle();
  }
}
