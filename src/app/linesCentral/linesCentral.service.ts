import { Injectable } from '@angular/core';

import * as data from 'assets/data/sample-the-odds-api.json';

@Injectable({
  providedIn: 'root',
})
export class LineCentralService {
	public getSampleTheOddsData() {
		function getFormattedGame(game) {
			var home_team = game.home_team;
			return {
				homeTeam: home_team,
				awayTeam: getAwayTeam(home_team, game.teams),
				timeStamp: game.commence_time,
				sites: game.sites
			}
		}
		function getAwayTeam(homeTeam, homeAwayArray) {
			return homeAwayArray.filter(team => {
				return team !== homeTeam;
			})[0];
		}
		function getProbabilityOdds(decimalOdds) {
			// TODO
		}
		function convertToMoneyLine(odds) {
			// TODO
		}
		/* 
			OUT : 
			Array <Object>
				{
					homeTeam: String
					awayTeam: String
					timeStamp: Number // TODO convert to nice date layout eventually
					sites: Array <Object> {
						awayMoneyLine: String
						homeMoneyLine: String
						site: String
						lastUpdate: Number // TODO convert to nice date layout eventually
					}
				}
		*/
		if(data && data.default && data.default.success) {
			data && data.default 
			var games = data.default.data,
				formattedData = [];
			
			games.forEach(game => {
				formattedData.push(getFormattedGame(game));
				game.homeTeam = game.home_team;
			});
			
			return formattedData;
		} 

		// an else condition without the explicit else
		console.error('Could not read sample data');
	}
}