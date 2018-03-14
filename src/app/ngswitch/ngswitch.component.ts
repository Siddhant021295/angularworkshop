import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template:
  `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Red</div>
      <div *ngSwitchCase="'blue'">Blue</div>
      <div *ngSwitchCase="'black'">Black</div> 
      <div *ngSwitchDefault>pick again</div>
    </div>
  `,
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  public color="red";
  constructor() { }

  ngOnInit() {
  }

}
