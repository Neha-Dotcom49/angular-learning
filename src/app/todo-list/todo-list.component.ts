import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { delay, Observable, of } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  presentDay = new Date();
  price = 7700;
  myObservable$!: Observable<any>;
  todos: Todo[] = [];
  newTodo: Todo = { title: '', completed: false};
  selectedTodo: Todo = { title: '', completed: false };
  title!: string ;
  // Inject the Todo service 
  constructor(private _todoService: TodoService) { }
  
  ngOnInit(): void {
  
    this.getTodos();
    this.myObservable$ = of('This is custom observable').pipe(delay(5000));
  }
  getTodos() {
    this._todoService.getTodos().subscribe(res => {
     
      this.todos = res;
      console.log('getall todos ', this.todos); // 
    });
  }
  AddTodo() {
    this._todoService.createTodo(this.newTodo).subscribe(res => {
      console.log('Todo created successfully', res);
      this.getTodos();
    });
  }

  getTodoById() {
    this._todoService.getTodoById(1724641261073).subscribe(res => {
      console.log('get todo by id', res);
      
    })
  }
  updateTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this._todoService.updateTodo(todo).subscribe(res => {
      console.log('ToDo updated', res);
      
    })
  }

  openUpdateModal(todo: Todo) {
  this.selectedTodo = { ...todo };
  const modalElement = document.getElementById('updateModal');
  if (modalElement) {
    // Use Bootstrap's Modal API directly
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }
}

saveUpdatedTodo() {
  this._todoService.updateTodo(this.selectedTodo).subscribe(res => {
    this.getTodos();
    const modalElement = document.getElementById('updateModal');
    if (modalElement) {
      // Use Bootstrap's Modal API directly
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  });
}



  deleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo.id!).subscribe(res => {
      console.log('todo deleted', res);
      this.getTodos();
    })
  }
}
