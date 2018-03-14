import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <h2>
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value ="Some Text"> 
  <input [id]="myId"  type="text" value ="Some Text">  
  </h2>
  `,
  styles: []
})
export class PropertybindingComponent implements OnInit {

  public isDisabled = false;
  public myId ="testId";
  
  constructor() { }

  ngOnInit() {
  }

}
