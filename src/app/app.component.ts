import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	menuOptions = [
		{name: 'Home', path:'Home'}, 
		{name: 'The Odds Api', path:'LinesCentral'}, 
		{name: 'ESPN FF Web Scraper', path:'ESPNScraper'},
		{name: 'Draft Board 2019', path:'DraftDay'},
		{name: 'NFL Schedule Pick\'em 2019', path:'NFLSchedule'}
	];
}
