import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';

import { PlaylistsService } from './playlists.service';
import { Entry } from './entry';

@Component({
  selector: 'sc-add-playlist',
  template: `
  <a class=" text-center" [popover]="addPlaylist" placement="bottom" #pop="bs-popover">
  <div [class.addPlaylist]="!isEntry()" (clickOutside)="pop.hide()" [exclude]="'.doNotDismiss'" [excludeBeforeClick]=true>
  <i class="icofont icofont-ui-add"></i> Add <span *ngIf="isEntry()">track to a </span>a new Playlist
  </div>
  </a>
  <ng-template #addPlaylist  >
  <form #newPlaylistForm="ngForm" (ngSubmit)="newPlaylist(newPlaylistForm);pop.hide();closeParentPopover()" class="doNotDismiss">
  <input ngModel name="playlistName" required="" placeholder="New Playlist">
  <button type="submit" [disabled]="!newPlaylistForm.form.valid">Add <span *ngIf="isEntry()">track to a </span>new Playlist</button>
  </form>
  </ng-template>

  `,
  styles: []
})
export class AddPlaylistComponent implements OnInit {
  @Input() entry: Entry;
 @Output() closeParent = new EventEmitter();
  constructor(private pService: PlaylistsService) { }
  isEntry() {
    return this.entry!==undefined;
  }
  closeParentPopover() {
    this.closeParent.emit(false);
  }
  newPlaylist(form: FormGroup) {
    let newPlaylist = this.pService.newPlaylist(form.value.playlistName);
    if (this.entry) {
      this.pService.addTrack(newPlaylist, this.entry);
    }
    form.reset();
  }

  ngOnInit() {
  }

}
