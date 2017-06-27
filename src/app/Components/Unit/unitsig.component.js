"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UnitSigClass_1 = require("./UnitSigClass");
var UnitSigComponent = (function () {
    function UnitSigComponent() {
        this.unitItems = [
            new UnitSigClass_1.UnitSig(1, "<a href='http://steamcommunity.com/id/And_So_It_Begins/' target='_blank'><img src='https://steam.mmosvc.com/76561197995193057/v1.png' alt='76561197995193057' /></a>", "SSGT"),
            new UnitSigClass_1.UnitSig(2, "<a href='http://steamcommunity.com/id/klovok/' target='_blank'><img src='https://steam.mmosvc.com/76561197985800328/v1.png' alt='76561197985800328' /></a>", "SGT"),
            new UnitSigClass_1.UnitSig(3, "<a href='http://steamcommunity.com/id/laytz94/' target='_blank'><img src='https://steam.mmosvc.com/76561197989824235/v1.png' alt='76561197989824235' /></a>", "SGT"),
            new UnitSigClass_1.UnitSig(4, "<a href='http://steamcommunity.com/id/carbunch/' target='_blank'><img src='https://steam.mmosvc.com/76561197996574115/v1.png' alt='76561197996574115' /></a>", "SGT")
        ];
    }
    return UnitSigComponent;
}());
UnitSigComponent = __decorate([
    core_1.Component({
        selector: 'unitsig',
        templateUrl: './UnitSig.html'
    })
], UnitSigComponent);
exports.UnitSigComponent = UnitSigComponent;
//# sourceMappingURL=unitsig.component.js.map