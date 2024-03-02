import { EventEmitter, Injectable, Output } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  @Output() todosUpdated = new EventEmitter<Todo[]>();

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

    this.todosUpdated.emit(this.todos.slice());
  }

  onTodoDeleted(id: string) {
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
    this.todosUpdated.emit(this.todos.slice());
  }

  onTodoChecked(id: string) {
    this.todosUpdated.emit(this.todos.slice());
    console.log('onTodoChecked', this.todos);
  }

  getTodosLeft() {
    const todosLeft = this.todos.filter((todo) => !todo.done);
    this.todos.forEach((todo) => {
      console.log(todo.description);
      console.log(todo.done);
    });
    console.log('todosLeft', todosLeft);
    console.log('todosLeft.length', todosLeft.length);
    return todosLeft.length;
  }
}
