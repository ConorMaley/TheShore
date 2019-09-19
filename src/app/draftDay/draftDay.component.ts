import { Component, OnInit } from '@angular/core';

import { DraftDayService } from './draftDay.service';

@Component({
  selector: 'draft-day',
  templateUrl: './draftDay.component.html'
})
export class DraftDayComponent {

  constructor () { }
  
  ngOnInit() {
  	console.log('whaddup');
  }
}
