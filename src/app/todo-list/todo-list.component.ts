import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  todosLeft: number;

  constructor(private todoService: TodoService) {
    this.todosLeft = this.todoService.getTodosLeft();
  }

  ngOnInit() {}

  ngOnChanges() {
    this.todosLeft = this.todoService.getTodosLeft();
  }

  teste() {
    this.todoService.getTodosLeft();
  }
}
