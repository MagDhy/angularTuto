import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-servers',  //element <app-servers></app-servers>
  //selector: '[app-servers]', attribut <div app-servers>
  //selector: '.app-servers',  class but not id
  templateUrl : './servers.component.html',
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true; //the p is not in the dom then appear with ngIf on true
    //this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
  }
  //onUpdateServerName(event : Event){
  //  this.serverName = (<HTMLInputElement>event.target).value;
  //}
  
  

}
