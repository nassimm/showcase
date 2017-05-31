import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
	selector: 'sc-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	data: Object;
	name = new FormControl();
	observeInput: Observable<string>;

	constructor(private http: Http) {
	}
	searchyt(term: string) {
		this.http.get("https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet&q='"+term+"'")
		.map(res => res.json())
		.subscribe(data => this.data = data.items,
			err => console.log(err),
			() => console.log());
		console.log(this.name);
	}
	ngOnInit() {
		// this.searchyt();
		this.observeInput = this.name.valueChanges.debounceTime(600);
		this.observeInput.subscribe(data => this.searchyt(data));

	}

}
