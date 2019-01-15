import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent {

  constructor () { }
  
  ngOnInit() {
  	console.log('homepage oninit');
  }
}
