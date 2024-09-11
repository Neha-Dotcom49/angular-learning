import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strucdir',
  templateUrl: './strucdir.component.html',
  styleUrls: ['./strucdir.component.css']
})
export class StrucdirComponent implements OnInit {
  
  cartItems: string[] = []; // initially empty
  color :string= 'black';
  constructor() { }

 
  ngOnInit(): void {
  }
  addItem(item: string) 
  {
    this.cartItems.push(item);
  }
  removeItem(index: number){
    console.log('before remove the item', this.cartItems);
    this.cartItems.splice(index,1);
    console.log('after remove the item', this.cartItems);
    
  }

}
