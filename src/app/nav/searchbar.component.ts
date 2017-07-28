import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'sc-searchbar',
  template: `
  <div class="searchbar">
  <i class="icofont icofont-search searchbar_icon"></i>
  <input type="text" [formControl]="name" class="searchbar_input" placeholder="Search Youtube for tracks" (click)="searchIfNotEmpty()">
  </div>
  `,
  styleUrls: ["searchbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchbarComponent implements OnInit {
  name = new FormControl();
  observeInput: Observable<string>;

  constructor(private router:Router) { }

  ngOnInit() {
    this.observeInput = this.name.valueChanges.debounceTime(250).distinctUntilChanged();
    this.observeInput.subscribe(data => this.router.navigateByUrl("search/"+data));
  }
  searchIfNotEmpty() {
    if (this.name.value) {this.router.navigateByUrl("search/"+this.name.value)}
  }

}
