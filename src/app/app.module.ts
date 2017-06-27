import { NgModule}      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {NavBarComponent} from './Components/Navbar/navbar.component';
import {UnitSigComponent} from './Components/Unit/unitsig.component';
import {MainComponent} from './Components/Main/main.component';

const appRoutes: Routes = [
  { path: 'Home', component: MainComponent },
  { path: 'Unit', component: UnitSigComponent }
  //{ path: '',
  //  redirectTo: '/home',
  //  pathMatch: 'full'
  //},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,NavBarComponent,UnitSigComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}