import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  age!: number;
  // Inject the HTTPClient service class 
  constructor(private _httpClient: HttpClient) { }
  
   calculateAge(birthDate : Date) {
    if (birthDate) {
     var timeDiff = Math.abs(Date.now() - new Date(birthDate).getTime());
     this.age= Math.floor((timeDiff / (1000*3600*24)) / 365);
     return this.age;
    }
   return this.age;
 }
 
 createPost() : Observable<IPost> {
  const newPost : IPost = {
    title: 'ANgular14',
    body: 'API Post Method',
    userId: 1
  }
 return this._httpClient.post<IPost>('https://jsonplaceholder.typicode.com/posts', newPost );
 }

 getPosts() : Observable<any> {
  return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  
 getComments()  {
  return this._httpClient.get('https://jsonplaceholder.typicode.com/comments').toPromise();
  }

  hello() : Observable<any> {
    const myObservable = new Observable(subscriber => {
      subscriber.next('Hello');
      subscriber.next('Angular B12 batch');
      subscriber.complete();
    });
    return myObservable;
   }
}
