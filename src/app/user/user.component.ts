import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetUserName(){

    this.userName = '';
  }
  onUpdateUserName(event : Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
