import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template:`   
  <h2>ng If</h2>
  
  <h2 *ngIf="false">
    Some Text 1
  </h2>
  
  <h2 *ngIf="displayname">
    Some Text 2
  </h2>
  
  
  <h2 *ngIf="displayname1; else elseBlock">
    Some text 3 if is true
  </h2>
  <ng-template #elseBlock>
    <h2>
      some text 3 if is false 
    </h2>
  </ng-template>
  <div *ngIf="displayname3 then thenBlock1 ; else elseBlock1">
  </div>
  <ng-template #thenBlock1>
    <h2>
      Some text 4 if is true
    </h2>
  </ng-template>
  <ng-template #elseBlock1>
    <h2>
      Some text 4 if is false 
    </h2>
  </ng-template>
  `,
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public displayname=true;
  public displayname1=false;
  public displayname2=false;
}
