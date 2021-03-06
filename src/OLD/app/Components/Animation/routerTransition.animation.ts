import { trigger, state, animate, transition, style } from '@angular/animations';

export const routerTransition =
trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%', left:'0%'}) ),
    state('*', style({position:'absolute', width:'100%', left:'0%'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);