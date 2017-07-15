import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  showId:boolean=true;
  title = 'app';
  public chatIcon: boolean=true;
  public openChat: boolean=false;
  toggleSelect(){
   this.showId =! this.showId;
   console.log(this.showId);
  }

  constructor() { }

  ngOnInit() {
  }

  openNewChat() {
  console.log("in Open new chat");
    this.openChat = !this.openChat;
  }

}
