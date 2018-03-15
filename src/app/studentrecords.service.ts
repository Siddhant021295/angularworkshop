import { Injectable } from '@angular/core';

@Injectable()
export class StudentrecordsService {

  constructor() { }

  getstudents(){
    return [
      {"enrollment" : "0801CS151079" , "name":"Siddhant Gupta"},
      {"enrollment" : "0801CS151095" , "name":"Yash Agrawal"},
      {"enrollment" : "0801IT151091" , "name":"Yash Salecha"},
      {"enrollment" : "0801EC151087" , "name":"Vrishti Jain"}
    ];
  }

}
