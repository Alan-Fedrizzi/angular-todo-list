import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.todoUpdated.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }
}
