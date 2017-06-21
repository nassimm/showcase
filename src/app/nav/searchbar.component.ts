import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'sc-searchbar',
  template: `
  <div class="sc-searchbar">
  <i class="icofont icofont-search sc-searchbar_icon"></i>
  <input type="text" [formControl]="name" class="sc-searchbar_input" placeholder="Search Youtube for tracks" (click)="searchIfNotEmpty()">
  </div>
  `
})
export class SearchbarComponent implements OnInit {
  name = new FormControl();
  observeInput: Observable<string>;

  constructor(private router:Router) { }

  ngOnInit() {
    this.observeInput = this.name.valueChanges.debounceTime(600);
    this.observeInput.subscribe(data => this.router.navigateByUrl("search/"+data));


  }
  searchIfNotEmpty() {
    if (this.name.value) {this.router.navigateByUrl("search/"+this.name.value)}

  }

}
