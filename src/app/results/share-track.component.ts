import { Component, Input } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'sc-share-track',
  template: `
  <a class="icofont icofont-share" [popover]="share" #pop="bs-popover" ngClass="{{'excludeShare'+entry.id}}"></a>
  <ng-template #share>


<sc-share [entry]="entry" (clickOutside)="pop.hide()" exclude="{{'.excludeShare'+entry.id}}"></sc-share>


  </ng-template>
  `,
  styles: []
})
export class ShareTrackComponent {
  @Input() entry: Entry;
}
