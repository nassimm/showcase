import { Component, OnInit, Input } from '@angular/core';

import { YoutubeService } from '../youtube.service';
import { Entry } from '../entry';

@Component({
  selector: 'sc-play',
  template: `
  <a class="play-button"
  (click)="playTrack(entry)"
  [class.isDisabled]="isYtInit()==false"  *ngIf="!isPlaying() || entry !== getPlaying();else btnpause">
  <i class="icofont icofont-ui-play"></i>
  </a>

  
  <ng-template #btnpause>
   <a (click)="pauseTrack()" class="play-button"><i class="icofont icofont-ui-pause"></i></a>
  </ng-template>
  `,
  styles: []
})
export class PlayComponent implements OnInit {
  @Input() entry: Entry;
  constructor(private ytService: YoutubeService) { }
  playTrack(entry: Entry) {
    if (entry) {
      this.ytService.setPlaying(entry);
    }
  }
  pauseTrack() {
    this.ytService.pauseTrack();
  }
  isYtInit() {
    return this.ytService.isYtInit();
  }
  getPlaying() {
    return this.ytService.getPlaying();
  }
  ngOnInit() {
  }
  isPlaying() {
    return this.ytService.isPlaying();
  }
}
