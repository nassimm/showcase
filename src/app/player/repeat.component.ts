import { Component } from '@angular/core';
import { YoutubePlayerService } from '../services/youtube-player.service'

@Component({
  selector: 'sc-repeat',
  template: `
  <i class="icofont icofont-refresh loopAndShuffleGroup_button" [class.isActive]="isRepeat()" (click)=toggleRepeat()></i>
  `,
  styles: []
})
export class RepeatComponent {
  constructor(private ytService: YoutubePlayerService) { }

  isRepeat() {
    return this.ytService.isRepeat();
  }
  toggleRepeat() {
    this.ytService.toggleRepeat();
  }
}
