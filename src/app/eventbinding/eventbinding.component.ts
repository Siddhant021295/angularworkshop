import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template:
  `
  <h2>
    <button (click)="onClick1()">Some Text 1</button>
    {{greeting}}
    <button (click)="onClick2($event)">Some Text 2</button>
    {{etype}}
    <button (click)="greeting1='Some Text'">Some Text 3</button>
    {{greeting1}}
  <h2>
    `,
  styles: []
})
export class EventbindingComponent implements OnInit {
 
  public greeting ="";
  public greeting1 ="";
  public etype ="";
  
  constructor() { }

  ngOnInit() {
  }

  onClick1(){
    this.greeting="Hello World";
  } 

  onClick2(event){
    this.etype=event.type;
    console.log(event);
  }
}
