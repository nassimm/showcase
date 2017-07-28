import { Component, Input } from '@angular/core';
import { YoutubePlayerService } from '../services/youtube-player.service';

@Component({
  selector: 'sc-prev',
  template: `
  <a (click)= "handle()">  
  <div class="control--small">
  <i class="icofont" [class.icofont-ui-previous]="!next" [class.icofont-ui-next]="next">
  </i>
  </div>
  </a>
  `,
  styles: []
})
export class PrevComponent {
  @Input() next = false;
  constructor(private ytService: YoutubePlayerService) { }
  handle() {
    this.next?this.ytService.nextTrack():this.ytService.prevTrack()
  }
}
