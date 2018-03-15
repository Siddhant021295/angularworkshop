import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './student';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpstudentService {

  private _url : string ="/assets/data/studentsdetail.json";

  constructor(private http: HttpClient) { }
  getStudents()
  {
    return this.http.get<IStudent[]>(this._url);
    
    
  }
}
