import { EventEmitter, Injectable, Output } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  @Output() serviceTodoDelete = new EventEmitter<string>();

  constructor() {}

  onTodoAdded(description: string) {
    if (description === '' || description.length < 0) return;

    this.todos.push({
      id: crypto.randomUUID(),
      description: description,
      done: false,
    });
  }

  onTodoDeleted(id: string) {
    console.log(this.todos);
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
    console.log(this.todos);
    // está atualizando o todos corretamente, mas não está repassando para a lista renderizar novamente os items..
    // vamos alterar e fazer com observables....
  }
}
