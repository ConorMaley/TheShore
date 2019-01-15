import { Component, Input } from '@angular/core';

@Component({
  selector: 'shore-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  {

	@Input() menuOptions: Array<Object>;
	title = 'The Shore';
}
