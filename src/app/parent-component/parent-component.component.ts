import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  parentMessage: string = 'Wishing you a great day!';
  constructor() { }

  ngOnInit(): void {
  }

  
  changeMessage(){
    this.parentMessage = 'Message changed!';
  }
}
