import { Component, OnInit, Input } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'sc-share',
  template: `
  <share-buttons [defaultStyle]="defaultStyle"
  [facebook]="icons.fb"
  [twitter]="icons.twitter"
  [google]="icons.gplus"
  [reddit]="icons.reddit"
  [pinterest]="false"
  [linkedIn]="false"
  [tumblr]="false"
  [whatsApp]="false"
  [stumbleUpOn]="false"
  url="{{url}}"
  [title]="title"
  [image]="image"
  ></share-buttons>
  `,
  styleUrls: ["./share.component.scss"]
})
export class ShareComponent implements OnInit {
  @Input() entry?: Entry;
  url: string;
  title: string;
  image: string;
  defaultStyle: boolean;
  icons = {
    fb: "<i class='icofont icofont-social-facebook'></i>",
    twitter: "<i class='icofont icofont-social-twitter'></i>",
    gplus: "<i class='icofont icofont-social-google-plus'></i>",
    reddit: "<i class='icofont icofont-social-reddit'></i>"}
    constructor() { }

    ngOnInit() {
      this.defaultStyle  = this.entry?true:false;
      this.url = this.entry?('https://www.youtube.com/watch?v='+this.entry.id):"http://nassimm.github.io/showcase"
      this.title = this.entry?this.entry.title:"Showcase - Easily play your favorite youtube music"
      this.image = this.entry?this.entry.thumbnails.high.url:""
    }

  }
