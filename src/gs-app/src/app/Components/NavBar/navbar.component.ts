import {Component} from '@angular/core'
import {Navbar} from './NavbarClass'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']    
})
export class NavBarComponent {
    navItems = [
        new Navbar(1,"Home", "/home"),
        new Navbar(2,"Forums", "/forums", false),
		new Navbar(3,"Unit","/unit") 
    ];
} 