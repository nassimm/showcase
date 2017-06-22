import { Injectable } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Injectable()
export class BgService {

	constructor(private sanitizer: DomSanitizer) { }
	getStyle(imgUrl: String) {
		if (!imgUrl) {
			return this.sanitizer.bypassSecurityTrustStyle("background-image: url('/assets/img/track_placeholder.jpg')");
		}
		const style = `background-image: url(${imgUrl})`;
		return this.sanitizer.bypassSecurityTrustStyle(style);
	}
}
