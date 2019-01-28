import { Injectable } from '@angular/core';
import { BaseAPIObject, League } from 'espn-fantasy-football-api';

@Injectable({
  providedIn: 'root',
})

export class EspnScraperService {
	public getData() {
		var cookies1 = {
			espnS2: 'AECLZtFKksq9%2F37dK%2Fr7Vwb7oMuZimuWgIEM%2BLBGnVhkbLYI1LfpQdrG0yeIISJLCkfdrTaVO1cRoAUwO1h7CLuMFx2fz%2BNMqAGs1L4bPyOsok8nQcP5XkdGPdfMjW%2BDT30eElNeJMgcfwhqgE%2BjpcDowPbcuZeUJmC3SxvH58MWG2OUXBXM4TZhpRnaX77%2FQUop%2BxIMze5s%2B0HyfhwcfdTDWEJJp2wsHUc5u7VPeLcAmWTRSJsbd%2FxTHa08Wn15%2BcI%3D', 
			SWID: '{0C180A83-D08F-4019-897B-DC860592930B}' 
		}, cookies2 = {
			espnS2: 'AEAa9gCT68Yv3vcrjqQU4hA6KVU4gAUDPcRdtte7GmjlIs96HJ%2BLCWOzUdFPYJS%2Fnwzj4oDE4%2B4xqsdLiqI3Te9fYyYtBXTInBcvzAq8nZeR0hZDmwA5IRcREhVLsnZfOe6WPwmBOHzAYvpKnKyo16K9iL1etU%2B%2B1Sdnd2srXYnuVaiNAKl00DxUEDhjDiRhMMc4Zi2YEU5bca8EpXAmDXT%2BwKQ7SZTtqM1XJcM7QOdpqYgHoJtljKY5swtaxS66ioA%3D', 
			SWID: '{0C180A83-D08F-4019-897B-DC860592930B}' 
		};

		BaseAPIObject.setCookies(cookies2); // fire and forget

		// const league = new League({ leagueId: 826265, seasonId: 2017 });
		const league = new League({ leagueId: 826265, seasonId: 2018 });
		league.read().then(() => console.log(league)); // Prints loaded league
	}
}