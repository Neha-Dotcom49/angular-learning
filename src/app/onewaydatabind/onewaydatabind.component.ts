import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaydatabind',
  templateUrl: './onewaydatabind.component.html',
  styleUrls: ['./onewaydatabind.component.css']
})
export class OnewaydatabindComponent implements OnInit {
  isDisabled: boolean = true;
  firstName: string = 'Jack';
  lastName:string='neha';
  name :string ='nehaa';
  userName: string = 'John Doe';
  title:string='hey hii neha';
  imageUrl : string = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';
  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.firstName = 'Manu';
  }
  changeImage(): void {
    this.imageUrl = "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180 width=300px";
  }
 
}
