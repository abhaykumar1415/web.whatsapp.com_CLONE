import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-chatitem',
  templateUrl: './chatitem.component.html',
  styleUrls: ['./chatitem.component.css'],
  animations: [
  trigger('flyIn', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(2000, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(2000, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.5}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ])
]
})
export class ChatitemComponent {
  constructor() { 
  }
}
