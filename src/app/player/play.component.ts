import { Component, OnInit, Input } from '@angular/core';

import { YoutubeService } from '../youtube.service';
import { Entry, Playlist } from '../entry';

@Component({
  selector: 'sc-play',
  template: `
  <a class="playButton"
  (click)="playTrack(entry)"
  [class.isDisabled]="isYtInit()==false"  *ngIf="!isPlaying() || entry !== getPlaying();else btnpause">
  <div class="playButton_wrapper">
  <i class="icofont icofont-ui-play"></i>
  </div>
  </a>

  
  <ng-template #btnpause>
  <a (click)="pauseTrack()" class="playButton">
  <div class="playButton_wrapper">
  <i class="icofont icofont-ui-pause"></i>
  </div>
  </a>
  </ng-template>
  `,
  styles: []
})
export class PlayComponent implements OnInit {
  @Input() collection: Entry[];
  
  @Input() entry: Entry;
  constructor(private ytService: YoutubeService) { }
  playTrack(entry: Entry) {
    if (entry) {
      this.ytService.setPlaying(entry, this.collection);
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
