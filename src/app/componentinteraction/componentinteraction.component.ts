import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-componentinteraction',
  template: 
  `
    <h2>
      {{parentData}}<br>
      {{data}}
    </h2>
    <button (click)="fireEvent()">send Event</button>
  `,
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {
  @Input() public parentData;
  @Input('parentData1') public data;

  @Output() public childevent= new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childevent.emit("data from child");
  }
}
