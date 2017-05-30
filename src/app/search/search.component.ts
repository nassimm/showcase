import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector: 'sc-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	data: Object;
	constructor(private http: Http) {
	}

	ngOnInit() {
		this.http.get("https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBNIXoVJN8_NbaA7hyBPPZgw5vIbZVsUVg&part=snippet&q='blabl'")
		.map(res => res.json())
		.subscribe(data => this.data = data.items,
			err => console.log(err),
			() => console.log());
	}

}
