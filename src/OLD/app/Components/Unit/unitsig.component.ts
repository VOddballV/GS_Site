import {Component, ElementRef} from '@angular/core'
import {UnitSig} from './UnitSigClass'
import { routerTransition } from '../Animation/index.js'

@Component({
    selector: 'unitsig',
    templateUrl: './unitsig.component.html',
	animations: [routerTransition],
  	host: { '[@routerTransition]': '' }  
})
export class UnitSigComponent {
    unitItems = [
        new UnitSig(
		1,
		"<a href='http://steamcommunity.com/id/And_So_It_Begins/' target='_blank'><img src='https://steam.mmosvc.com/76561197995193057/v1.png' alt='76561197995193057' /></a>", 
		"SSGT"
		),
        new UnitSig(
		2,
		"<a href='http://steamcommunity.com/id/klovok/' target='_blank'><img src='https://steam.mmosvc.com/76561197985800328/v1.png' alt='76561197985800328' /></a>", 
		"SGT"
		),
        new UnitSig(
		3,
		"<a href='http://steamcommunity.com/id/laytz94/' target='_blank'><img src='https://steam.mmosvc.com/76561197989824235/v1.png' alt='76561197989824235' /></a>", 
		"SGT"
		),
        new UnitSig(
		4,
		"<a href='http://steamcommunity.com/id/carbunch/' target='_blank'><img src='https://steam.mmosvc.com/76561197996574115/v1.png' alt='76561197996574115' /></a>", 
		"SGT"
		)		
    ];
} 