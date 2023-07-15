import { Component } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos: Todo[] = [];

  constructor() {}

  onTodoAdded(description: string) {
    if (description === '' || description.length < 0) return;

    this.todos.push({
      id: crypto.randomUUID(),
      description: description,
      done: false,
    });
  }

  teste() {
    console.log('aaaaaaaaaaaaa');
  }
}
