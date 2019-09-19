import { Injectable } from '@angular/core';

import data from 'assets/data/nfl-reg-season.json';

@Injectable({
  providedIn: 'root',
})
export class NFLScheduleService {
	public getGames() {

		if(data && data.data.length) {
			/*
			{
			    "Week": 1,
			    "Day": "Thu",
			    "": "September 5",
			    "VisTm": "Green Bay Packers",
			    "Pts": "",
			    "__1": "@",
			    "HomeTm": "Chicago Bears",
			    "Pts__1": "",
			    "Time": "8:20 PM"
			 },
			*/
			var formattedData = [];
			for (var i = 1; i <= 17; i++) {
				formattedData[i] = [];
			}
			data.data.forEach(function (element) {
				formattedData[element.Week].push({
					//todo figure out date
					day: element.Day + ' ' + element.Time,
					visitor: element.VisTm,
					home: element.HomeTm
				});
			});

			var nflSchedule = [];

			
			
			return formattedData;
		} 

		// an else condition without the explicit else
		console.error('Could not read sample data');
	}
}