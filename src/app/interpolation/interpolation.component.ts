import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `

  <!-- Interpolation -->
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome "+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}<h2>
  <h2>{{greetUser()}}</h2>  
  <h2>{{location}}</h2>
  
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name="Some Text";
  public location=window.location.href;
  greetUser(){
    return "hello "+this.name;
  }
  constructor() { }

  ngOnInit() {
  }

}
