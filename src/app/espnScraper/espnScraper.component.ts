import { Component, OnInit } from '@angular/core';

import { EspnScraperService } from './espnScraper.service';

@Component({
  selector: 'espn-scraper',
  templateUrl: './espnScraper.component.html',
  styleUrls: ['./espnScraper.component.css']
})
export class ESPNScraperComponent implements OnInit {
	data
	leagueID
	year

  	constructor (private espnScraperService: EspnScraperService) { }

  	getData() {
  		console.log('TODO');
  		console.log(this.leagueID);
  		console.log(this.year);
  	}
  
  	ngOnInit() {
  		// this.year = 2017;
  		this.data = this.espnScraperService.getData();
  		// console.log(this.data);
  	}
}
