"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.routerTransition = animations_1.trigger('routerTransition', [
    animations_1.state('void', animations_1.style({ position: 'absolute', width: '100%', left: '0%' })),
    animations_1.state('*', animations_1.style({ position: 'absolute', width: '100%', left: '0%' })),
    animations_1.transition(':enter', [
        animations_1.style({ transform: 'translateX(100%)' }),
        animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(0%)' }))
    ]),
    animations_1.transition(':leave', [
        animations_1.style({ transform: 'translateX(0%)' }),
        animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(100%)' }))
    ])
]);
//# sourceMappingURL=routerTransition.animation.js.map