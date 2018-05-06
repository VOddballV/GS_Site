"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fadeInAnimation = animations_1.trigger('fadeInAnimation', [
    // route 'enter' transition
    animations_1.transition(':enter', [
        // styles at start of transition
        animations_1.style({ opacity: 0 }),
        // animation and styles at end of transition
        animations_1.animate('.5s', animations_1.style({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map