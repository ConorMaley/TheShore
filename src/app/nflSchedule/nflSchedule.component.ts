import { Component, OnInit } from '@angular/core';

import { NFLScheduleService } from './nflSchedule.service';

@Component({
  selector: 'nfl-schedule',
  templateUrl: './nflSchedule.component.html',
  styleUrls: ['./nflSchedule.component.css']
})
export class NFLScheduleComponent {
	schedule
	

  constructor (private nflScheduleService: NFLScheduleService) { }
  
  ngOnInit() {
  	this.schedule = this.nflScheduleService.getGames();
  	console.log('nflScheduleComp oninit');
  }
}
