import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input('gettingData') inputData: string | undefined;  alise name eg
  @Input() inputData: string | undefined;
  @Output() myEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log('getting data from Parent ', this.inputData);
  }
  emitData(data: string) {
    this.myEvent.emit(data); // raise the custom event i.e myevent
  }

}

