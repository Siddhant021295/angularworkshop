import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: 
  `
  <div *ngFor="let color of colors ; index as i ; first as f ; last as l; odd as o; even as e">
    <h3> index={{i+1}} first={{f}} last={{l}} odd={{o}} even={{e}} color={{color}} </h3>
  <div>
  `,
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public colors =["red" ,"blue","black","yellow"];

}
