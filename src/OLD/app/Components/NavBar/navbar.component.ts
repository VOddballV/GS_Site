import {Component} from '@angular/core'
import {Navbar} from './NavbarClass'

@Component({
    selector: 'navbar',
    templateUrl: './NavBar.html'
})
export class NavBarComponent {
    navItems = [
        new Navbar(1,"Home", "/home"),
        new Navbar(2,"Forums", "/forums", false),
		new Navbar(3,"Unit","/unit") 
    ];
} 