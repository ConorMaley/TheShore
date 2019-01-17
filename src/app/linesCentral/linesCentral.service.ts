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
				lines: getLines(game.sites)
			}
		}
		function getAwayTeam(homeTeam, homeAwayArray) {
			return homeAwayArray.filter(team => {
				return team !== homeTeam;
			})[0];
		}
		function getLines(sites) {
			var lines,
				siteLines = [],
				awayAvgH2H = 0,
				homeAvgH2H = 0;

			sites.forEach(site => {
				var h2hArray = site.odds.h2h;

				siteLines.push({
					name: site.site_nice,
					lastUpdate: site.last_update,
					siteOdds: getConvertedOdds(h2hArray)
				});

				awayAvgH2H += h2hArray[0];
				homeAvgH2H += h2hArray[1];
			});

			awayAvgH2H /= sites.length;
			homeAvgH2H /= sites.length;

			lines = {
				siteLines: siteLines,
				awayAvgH2H: awayAvgH2H, //TODO 
				homeAvgH2H: homeAvgH2H, // TODO
				awayMedML: '-110', //TODO 
				homeMedML: '-110' // TODO
			}

			return lines;
		}
		function getConvertedOdds(h2hArray) {
			var homeH2H, awayH2H; 
			[awayH2H, homeH2H] = h2hArray;

			var awayProb, homeProb;

			[awayProb, homeProb] = getProbabilityOdds(h2hArray);

			return {
				awayH2H: awayH2H,
				homeH2H: homeH2H,
				awayProb: awayProb,
				homeProb: homeProb
			}
		}
		function getProbabilityOdds(decimalOdds) { return [1/decimalOdds[0], 1/decimalOdds[1]]; }
		function convertToMoneyLine(probabilityOdds) {
			// TODO
		}
		function getMedML(moneyLines) {
			// TODO
		}
		/* 
			OUT : 
			export interface Lines {
				awayH2H: Number;
				homeH2H: Number;
				awayML: Number;
				homeML: Number;
				lastUpdate: Number;
				name: String;
			}

			export interface GameData {
			   awayTeam: String;
			   homeTeam: String;
			   awayMedML: Number;
			   homeMedML: Number;
			   lines:Array<Lines>;
			}
			Array <Object>
				{
					homeTeam: String
					awayTeam: String
					awayMedML: Number;
			   		homeMedML: Number;
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