import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';

import { PlaylistsDataService } from '../services/playlists-data.service';
import { Entry } from '../entry';

@Component({
  selector: 'sc-add-playlist',
  template: `
  <div class="addPlaylist" [class.addPlaylist--isEdit]="isEdit()">

  <div class="addPlaylist_over">
  <i class="icofont icofont-ui-add"></i> Add <span *ngIf="isEntry()">track to a </span>a new Playlist
  </div>


  <form #newPlaylistForm="ngForm" (ngSubmit)="newPlaylist(newPlaylistForm);closeParentPopover()" class="doNotDismiss">
  <input ngModel class="addPlaylist_input" name="playlistName" required="" placeholder="Playlist Name" (focus)="showInput()" (blur)="hideInput()">
  <button class="addPlaylist_button" type="submit" [disabled]="!newPlaylistForm.form.valid"><i class="icofont icofont-ui-add"></i></button>
  </form>
 
</div>
  `,
  styleUrls: ["add-playlist.component.scss"]
})
export class AddPlaylistComponent implements OnInit {
  @Input() entry: Entry;
  @Output() closeParent = new EventEmitter();
  edit = false;

  constructor(private pService: PlaylistsDataService) { }
  
  showInput() { this.edit = true; }
  hideInput() {  this.edit = false; }
  isEdit() {
    return this.edit;
  }
  isEntry() {
    return this.entry!==undefined;
  }
  closeParentPopover() {
    this.closeParent.emit(false);
  }
  newPlaylist(form: FormGroup) {
    const newPlaylist = this.pService.newPlaylist(form.value.playlistName);
    if (this.entry) {
      this.pService.addTrack(newPlaylist, this.entry);
    }
    form.reset();
  }

  ngOnInit() {
  }

}
