import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template:
  `
  <h2 class="text-success">
    Some Text 1 
  </h2>
  <h2 [class]="success">
    Some Text 2
  </h2>
  <h2 [class]="success" class="text-special">
    Some Text 3
  </h2>
  <h2 [class.text-danger]="hasError">
    Some Text 4
  </h2>
  <h2 [ngClass]="messageClasses" class="text-special">
    Some Text 5
  </h2>
  `,
  styles: [`
  div{
    color:red;
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  public success = "text-success";

  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  ngOnInit() {
  }

}
