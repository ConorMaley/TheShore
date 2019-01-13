import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dummy-page',
  templateUrl: './dummyPage.component.html'
})
export class DummyPageComponent {

  constructor () { }
  
  ngOnInit() {
  	console.error('this page don\'t exist yet');
  }
}
