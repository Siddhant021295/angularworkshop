import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-referencevariable',
  template: 
  `
    <h2>
      <input #myInput type="text">
      <button (click)="logMessage(myInput)">Log</button>
      {{value}}
    </h2>
  `,
  styles: []
})
export class TemplateReferencevariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public value="";
  logMessage(myInput){
    this.value=myInput.value;
    console.log(myInput);
  }
}
