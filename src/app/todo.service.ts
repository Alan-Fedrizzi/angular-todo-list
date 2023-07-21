import { EventEmitter, Injectable, Output } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  @Output() todoUpdated = new EventEmitter<Todo[]>();

  constructor() {}

  getTodos() {
    return this.todos.slice();
  }

  onTodoAdded(description: string) {
    if (description === '' || description.length < 0) return;

    this.todos.push({
      id: crypto.randomUUID(),
      description: description,
      done: false,
    });

    this.todoUpdated.emit(this.todos.slice());
  }

  onTodoDeleted(id: string) {
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
    this.todoUpdated.emit(this.todos.slice());
  }
}
