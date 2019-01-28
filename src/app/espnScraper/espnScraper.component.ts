import { Component, OnInit } from '@angular/core';

import { EspnScraperService } from './espnScraper.service';

@Component({
  selector: 'espn-scraper',
  templateUrl: './espnScraper.component.html',
  styleUrls: ['./espnScraper.component.css']
})
export class ESPNScraperComponent implements OnInit {
	data

  constructor (private espnScraperService: EspnScraperService) { }
  
  ngOnInit() {
  	this.data = this.espnScraperService.getData();
  	console.log(this.data);
  }
}
