import {Component} from '@angular/core';
import { fadeInAnimation } from './Components/Animation/index.js';

@Component({
    selector: 'my-app',
    templateUrl: './Components/Main/main.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }    
})
export class AppComponent { }