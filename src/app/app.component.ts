import { Component } from '@angular/core';
import * as data from 'assets/data/sample-the-odds-api.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
  	console.log(data);
  }
}
