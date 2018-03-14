import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: 
  `
  <h2>
    <input [(ngModel)]="name" type="text">
    {{name}}
  </h2>
  `,
  styles: []
})
export class TwowaybindingComponent implements OnInit {

  public name ="";
  constructor() { }

  ngOnInit() {
  }

}
