import { Component } from '@angular/core'
import { routerTransition } from '../Animation/index.js'

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
	animations: [routerTransition],
    host: { '[@routerTransition]': '' },
    styleUrls: ['./main.component.css']      
})
export class  MainComponent {

} 