import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {NavBarComponent} from './Components/Navbar/navbar.component';
import {UnitSigComponent} from './Components/Unit/unitsig.component';
import {MainComponent} from './Components/Main/main.component';

const appRoutes: Routes = [
  { path: 'Home', component: MainComponent },
  { path: 'Unit', component: UnitSigComponent },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UnitSigComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
