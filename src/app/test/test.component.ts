import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div>
    Welcome {{name}}
  </div>
  <!-- Interpolation -->
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome "+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}<h2>
  <h2>{{greetUser()}}</h2>  
  <h2>{{location}}</h2>
  <!--property Binding-->
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value ="siddhant"> 
  <input [id]="myId"  type="text" value ="siddhant">
  <!-- Class Binding --> 
  <h2 class="text-success">Siddhant</h2>
  <h2 [class]="success">Siddhant</h2>
  <h2 [class]="success" class="text-special">Siddhant</h2>
  <h2 [class.text-danger]="hasError">fuck</h2>
  <h2 [ngClass]="messageClasses" class="text-special">Siddhant</h2>
  <!-- Style Binding-->
  <h2 [style.color]="hasError? 'Red': 'green' "> 
    Some Text 1
  </h2>
  
  <h2 [style.color]="'red'">
	  Some Text2
  </h2>

  <h2 [ngStyle]="titleStyle">
    Some Text 3
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
export class TestComponent implements OnInit {

  public name="Siddhant";
  public myId ="testId";
  public success="text-success";
  
  public location=window.location.href;
  
  public isDisabled = false;
  public hasError=true;
  public isSpecial = true;
  
  public messageClasses={
    "text-success":this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public titleStyle = {
    color : "blue",
    fontStyle: "italic"
  }
  public highlightColor ='orange';
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "hello "+this.name;
  }
}
