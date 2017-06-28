"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navbar = (function () {
    function Navbar(newID, newText, newUrlLink, newIsApp) {
        if (newUrlLink === void 0) { newUrlLink = "/home"; }
        if (newIsApp === void 0) { newIsApp = true; }
        this.id = newID;
        this.text = newText;
        this.urllink = newUrlLink;
        this.isApp = newIsApp;
    }
    return Navbar;
}());
exports.Navbar = Navbar;
//# sourceMappingURL=NavbarClass.js.map