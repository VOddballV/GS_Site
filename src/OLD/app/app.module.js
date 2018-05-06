"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./Components/Navbar/navbar.component");
var unitsig_component_1 = require("./Components/Unit/unitsig.component");
var main_component_1 = require("./Components/Main/main.component");
var appRoutes = [
    { path: 'Home', component: main_component_1.MainComponent },
    { path: 'Unit', component: unitsig_component_1.UnitSigComponent }
    //{ path: '',
    //  redirectTo: '/home',
    //  pathMatch: 'full'
    //},
    //{ path: '**', component: PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), animations_1.BrowserAnimationsModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, unitsig_component_1.UnitSigComponent, main_component_1.MainComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map