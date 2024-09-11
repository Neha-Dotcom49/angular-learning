import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-assign',
  templateUrl: './struct-assign.component.html',
  styleUrls: ['./struct-assign.component.css']
})
export class StructAssignComponent implements OnInit {
  cartItems:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addFood(item:string){
   this.cartItems.push(item)
  }

}
