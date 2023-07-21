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

  // constructor() {}
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  teste() {
    this.todoService.getTodosLeft();
  }
}
