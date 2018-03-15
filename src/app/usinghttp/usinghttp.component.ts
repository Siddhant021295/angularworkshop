import { Component, OnInit } from '@angular/core';
import { HttpstudentService } from '../httpstudent.service';

@Component({
  selector: 'app-usinghttp',
  template: 
  `
  <h2>
    <div *ngFor ="let student of students" >
      {{student.name}} {{student.enrollment}}
    </div>
  </h2>
  `,
  styleUrls: ['./usinghttp.component.css']
})
export class UsinghttpComponent implements OnInit {

  public students=[];
  constructor(private _httpstudent : HttpstudentService) { }

  ngOnInit() {
    this._httpstudent.getStudents().subscribe(data => this.students = data);
  }

}
