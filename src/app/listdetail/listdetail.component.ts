import { Component, OnInit } from '@angular/core';
import { StudentrecordsService } from '../studentrecords.service';

@Component({
  selector: 'app-listdetail',
  template: 
  `
  <h2>
    <div *ngFor ="let student of studentsdetails" >
      {{student.name}} {{student.enrollment}}
    </div>
  </h2>
  `,
  styleUrls: ['./listdetail.component.css']
})
export class ListdetailComponent implements OnInit {

  public studentsdetails=[];
  constructor(private _studentdetail : StudentrecordsService) { }

  ngOnInit() {
    this.studentsdetails=this._studentdetail.getstudents();
  }

}
