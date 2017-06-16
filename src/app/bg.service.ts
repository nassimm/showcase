import { Injectable } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Injectable()
export class BgService {

  constructor(private sanitizer: DomSanitizer) { }
  getStyle(imgUrl: String) {
    const style = `background-image: url(${imgUrl})`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
