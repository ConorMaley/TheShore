import { Component, OnInit } from '@angular/core';
import * as data from 'assets/data/sample-the-odds-api.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	menuOptions = [{name: 'The Odds Api'}, {name: 'menu1'}, {name: 'menu2'}];

  ngOnInit() {
  	console.log(data);
  }
}
