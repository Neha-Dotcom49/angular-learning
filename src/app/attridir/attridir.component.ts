import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';

@Component({
  selector: 'app-attridir',
  templateUrl: './attridir.component.html',
  styleUrls: ['./attridir.component.css']
})
export class AttridirComponent implements OnInit {

  myStyle = {
    'color': 'red',
    'font-size': '24px'
  }
  isActive: boolean = true;
  peoples: People[] = [
    { name: 'Jack', country: 'UK'},
    { name: 'Sumit', country: 'USA'},
    { name: 'Anup', country: 'HK'},
    { name: 'Rocky', country: 'UK'},
    { name: 'Surya', country: 'USA'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
