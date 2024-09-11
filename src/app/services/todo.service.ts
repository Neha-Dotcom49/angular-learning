import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = 'http://localhost:3000/todo';
  constructor(private _httpClient: HttpClient) { }
  // get all todos 
  getTodos() : Observable<any> {
   return this._httpClient.get(this.apiUrl);
  }
  // Get a single todo by ID 
  getTodoById(id: number) : Observable<Todo>{
    return this._httpClient.get<Todo>(`${this.apiUrl}/${id}`);
  }
  // Adding new todo 
  createTodo(todo: Todo) : Observable<Todo> {
    return  this._httpClient.post<Todo>(this.apiUrl, todo)
  }
  // Updat an existing todo 
  updateTodo(todo: Todo) : Observable<Todo> {
    return this._httpClient.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }
  // Delete a todo
  deleteTodo(id: number) {
    return this._httpClient.delete(`${this.apiUrl}/${id}`)
  }
}
