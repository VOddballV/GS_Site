import { Component } from '@angular/core';
import { fadeInAnimation } from './Components/Animation/index.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },  
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
