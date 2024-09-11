import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo!: Todo;
  // inject the todo service 
  constructor(private _todoService: TodoService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    alert(id);
    this._todoService.getTodoById(id).subscribe(res => {
      console.log('Todo Deatils', res);
      this.todo = res;
    })
  }

}
