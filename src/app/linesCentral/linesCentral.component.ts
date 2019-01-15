import { Component, OnInit } from '@angular/core';

import { LineCentralService } from './linesCentral.service';

@Component({
  selector: 'lines-central',
  templateUrl: './linesCentral.component.html',
  styleUrls: ['./linesCentral.component.css']
})
export class LinesCentralComponent implements OnInit {
	games

  constructor (private lineCentralService: LineCentralService) { }
  
  ngOnInit() {
  	this.games = this.lineCentralService.getSampleTheOddsData();
  	console.log(this.games);
  }
}
