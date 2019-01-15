import { Component, Input } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
	@Input() gameData: GameData;
  	constructor () { }
}

// TODO probably move these into the linesCentral component since thats where they're being made.

export interface Lines {
	awayH2H: Number;
	homeH2H: Number;
	lastUpdate: Number;
	name: String;
}

export interface GameData {
   awayTeam: String;
   homeTeam: String;
   lines:Array<Lines>;
}