import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-assign',
  templateUrl: './child-assign.component.html',
  styleUrls: ['./child-assign.component.css']
})
export class ChildAssignComponent implements OnInit {
  @Input() employee:any ;
  constructor() { }

  ngOnInit(): void {
    console.log('getting data from Parent ', this.employee);
    
  }

}
