import {Component} from '@angular/core'
import { routerTransition } from '../Animation/index.js'

@Component({
    selector: 'main',
    template: '',
	animations: [routerTransition],
  	host: { '[@routerTransition]': '' }  
})
export class  MainComponent {

} 