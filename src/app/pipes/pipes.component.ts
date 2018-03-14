import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: 
  `
    <h3>
      {{name}}<br>
      {{name | lowercase}}<br>
      {{name | uppercase}}<br>
      {{name | titlecase}}<br>
      {{index | slice: 3}}<br>
      {{index | slice: 3:6}}<br>
      {{student | json}}

    </h3>
  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public name ="sOmE TeXt";
  public index ="01234567";

  public student={
    firstname:"Siddhant",
    lastname:"Gupta"
  }
}
