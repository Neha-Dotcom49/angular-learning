import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  cartItems: { name: string; price: number; }[] = [];
  // List of items with predefined prices
  itemsWithPrices: { [name: string]: number } = {
    'Apple': 80,
    'Banana': 60,
    'Orange': 80,
    'Mango': 120
  };

  items: any[] = [
    { 
      'name': 'apple',
      'price': 100
    },
    { 
      'name': 'Banana',
      'price': 100
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addItem(name: string): void {
    const price = this.itemsWithPrices[name];
    if (price !== undefined) {
      this.cartItems.push({ name, price });
    } else {
      alert('Item not found');
    }
  }
}