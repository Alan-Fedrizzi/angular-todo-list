import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // onDeleteTodo() {
  //   // this.todoDeleted.emit(this.todo.id);
  //   this.todoService.deleteTodoEmit(this.todo.id);
  // }

  onDeleteTodo(id: string) {
    this.todoService.onTodoDeleted(id);
  }

  onCheckTodo(e: MouseEvent) {
    // e.preventDefault();
    // e.stopPropagation();
    // e.stopImmediatePropagation();
    // console.log('aaaaaaaaa');
    this.todoService.onTodoChecked(this.todo.id);
  }
}
