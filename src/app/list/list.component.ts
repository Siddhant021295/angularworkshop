import { Component, OnInit } from '@angular/core';
import { StudentrecordsService } from '../studentrecords.service';

@Component({
  selector: 'app-list',
  template: 
  `
    <h2>
      <div *ngFor ="let student of students" >
        {{student.name}}
      </div>
    </h2>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public students=[];
  constructor(private _studentrecordservice: StudentrecordsService ) { }

  ngOnInit() {
    this.students=this._studentrecordservice.getstudents();
  }

}
