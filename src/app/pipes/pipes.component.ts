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
      {{student | json}}<br>

      <{{5.56475 | number:'1.2-3'  }}<br>
      {{5.56475 | number:'3.5-8' }}<br>
      {{5.56475 | number:'3.1-2'  }}<br>
      
      {{0.25 | currency }}<br>
      {{0.25 | currency: 'INR'  }}<br>
      {{0.25 | currency: 'INR' :'code'  }}<br>

      {{date}}<br>
      {{date | date:'short'}}<br>
      {{date | date:'shortDate'}}<br>
      {{date | date :'shortTime'}}<br>

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
  public date = new Date();
}
