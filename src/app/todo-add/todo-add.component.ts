import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() todoCreated = new EventEmitter<string>();
  newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  onAddTodo() {
    this.todoService.onTodoAdded(this.newTodo);
    this.newTodo = '';
  }
}
