import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	menuOptions = [
		{name: 'Home', path:'Home'}, 
		{name: 'The Odds Api', path:'LinesCentral'}, 
		{name: 'menu2', path:'menu2'}
	];
}
