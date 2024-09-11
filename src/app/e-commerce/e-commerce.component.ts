import { Component, OnInit } from '@angular/core';
import { ECommeraceService } from '../services/e-commerace.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  ecommerceData: any[] = []; // Property to hold the data
    // inject the ECommeraceService 
    constructor(private _eCommeraceService: ECommeraceService) { }

  ngOnInit(): void {
    this._eCommeraceService.getData().subscribe(res => {
      console.log('getting ecommerce data from rapid api', res);
      this.ecommerceData = res; // Assign the response to the property
      
    });
  }

}
