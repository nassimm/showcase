import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'sc-prev',
  template: `
  <a (click)= "handle()">  
  <div class="control_small">
  <i class="icofont" [class.icofont-ui-previous]="!next" [class.icofont-ui-next]="next">
  </i>
  </div>
  </a>
  `,
  styles: []
})
export class PrevComponent implements OnInit {
  @Input() next = false;
  constructor(private ytService: YoutubeService) { }
  handle() {
    this.next?this.ytService.nextTrack():this.ytService.prevTrack()
  }
  ngOnInit() {
  }

}
