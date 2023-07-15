import { Component, Input } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() todos: Todo[] = this.todoService.todos;

  constructor(private todoService: TodoService) {}
}
