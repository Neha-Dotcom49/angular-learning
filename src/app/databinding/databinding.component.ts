import { Component, OnInit } from '@angular/core';
import { ProductContract } from '../ProductContract';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public Product:ProductContract = {
    Name: "",
    Price: 0,
    Stock: false,
    ShippedTo: ""
 }
 public UpdatedProduct:ProductContract = {
    Name: "",
    Price: 0,
    Stock: false,
    ShippedTo: ""
 }
 public RegisterClick():void {
     this.UpdatedProduct = this.Product;
 }
}



