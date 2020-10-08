import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  visibled = false;
  counts = [];
  countedClass = "";
  

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
  onDisplay(){
    this.visibled = true;
    this.counts.push(this.counts.length + 1);
    //this.count.push(new Date())
    
    setTimeout(() => {
      this.visibled = false;
    }, 10000);
    return this.getDisplay;
  }

  getDisplay(){
    return this.visibled ? 'block' : 'none';
  }
  
}
