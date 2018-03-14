import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
  <h2 [style.color]="hasError? 'Red': 'green' "> 
  Some Text 1
  </h2>

  <h2 [style.color]="'red'">
    Some Text2
  </h2>

  <h2 [ngStyle]="titleStyle">
    Some Text 3
  </h2>`,
styles: []
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public titleStyle = {
    color : "blue",
    fontStyle: "italic"
  }
}
