import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() todoCreated = new EventEmitter<string>();
  newTodo = '';

  constructor() {}

  ngOnInit() {}

  onAddTodo() {
    this.todoCreated.emit(this.newTodo);
    this.newTodo = '';
  }
}
