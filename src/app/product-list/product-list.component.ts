import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  viewProduct(product: any) {
    // Logic for viewing the product
    console.log('Viewing product:', product);
  }

  buyProduct(product: any) {
    // Logic for buying the product
    alert('View button clicked');
    console.log('Buying product:', product);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

