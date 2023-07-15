import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDeleted = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onDeleteTodo() {
    this.todoDeleted.emit(this.todo.id);
  }
}
