import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, take, takeLast } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  // users!: Observable<{name: string, age: number}>;
  users!: Observable<{name: string, age: number}[]>;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
        
        this.users = of([
      {name: 'Alice', age:30},
      {name: 'Bob', age:25},
      {name: 'Ajay', age: 35},
      { name: 'Baburao', age: 28},
      { name: 'Rocky', age: 55}
   ] ).pipe(
    // Use 'map' to filter the array of users
    map(users => users.filter(user => user.age >= 30 && user.name.startsWith('A'))),
    takeLast(1)
  );
  
    this.users.subscribe(res => {
      console.log('after filter', res);
      
    })


    // getting our own data
    const apiData = [
      { id: 1, name: 'Jack Sparrow', email: 'jack.sparrow@pirets.com', age: 55},
      { id: 2, name: 'Ganesh', email: 'ganesh@dev.com', age: 15},
    ]
    this.users = of(apiData).pipe(
                  map(users => users.map(user => ({name: user.name, age: user.age})))
    );
    this.users.subscribe(res => {
      console.log('after map ', res);
      
    })
  }
  
}
