import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service'

@Component({
  selector: 'sc-repeat',
  template: `
  <i class="icofont icofont-refresh controls_additional_button" [class.isActive]="isRepeat()" (click)=toggleRepeat()></i>
  `,
  styles: []
})
export class RepeatComponent implements OnInit {

  constructor(private ytService: YoutubeService) { }
  isRepeat() {
    return this.ytService.isRepeat();
  }
  toggleRepeat() {
    this.ytService.toggleRepeat();
  }
  ngOnInit() {
  }

}
