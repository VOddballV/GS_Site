"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navbar = (function () {
    function Navbar(newID, newText, newUrlLink) {
        if (newUrlLink === void 0) { newUrlLink = "/Home"; }
        this.id = newID;
        this.text = newText;
        this.urllink = newUrlLink;
    }
    return Navbar;
}());
exports.Navbar = Navbar;
//# sourceMappingURL=NavbarClass.js.map