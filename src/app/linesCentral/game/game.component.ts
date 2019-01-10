import { Component, Input } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styles: ['./game.component.css']
})
export class GameComponent {
	@Input() gameData: Object;
  	constructor () { }
}
