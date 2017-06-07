import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'sc-searchbar',
  template: `
  <div class="sc-searchbar">
  <input type="text" [formControl]="name" class="sc-searchbar_input">
  </div>
  `,
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  name = new FormControl();
  observeInput: Observable<string>;
  constructor(private router:Router) { }

  ngOnInit() {
    this.observeInput = this.name.valueChanges.debounceTime(600);
    this.observeInput.subscribe(data => this.router.navigateByUrl("search/"+data));
  }

}
