import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(todoList: Todo[], query: string) : Todo[] {
    debugger;
    if (query == null || query == "") {
      return todoList;
    } else {
     return todoList.filter(todo=> todo.title.toLowerCase().startsWith(query.toLowerCase()))
    }
  }
}
