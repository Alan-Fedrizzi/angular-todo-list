import { EventEmitter, Injectable, Output } from '@angular/core';

import { Todo } from './todo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  private todosSubject = new Subject<Todo[]>();
  todos$ = this.todosSubject.asObservable();
  private numberOfTodosLeftSubject = new Subject<number>();
  numberOfTodosLeft$ = this.numberOfTodosLeftSubject.asObservable();

  constructor() {}

  getTodos() {
    const initialTodos = localStorage.getItem('todos');
    const parsedInitialTodos = initialTodos ? JSON.parse(initialTodos) : [];
    this.todos = parsedInitialTodos;

    return this.todos.slice();
  }

  getNumberOfTodosLeft() {
    return this.todos.filter((todo) => !todo.done).length;
  }

  emitNext() {
    const todosCopy = this.todos.slice();
    this.todosSubject.next(todosCopy);
    this.numberOfTodosLeftSubject.next(
      todosCopy.filter((todo) => !todo.done).length
    );
    localStorage.setItem('todos', JSON.stringify(todosCopy));
  }

  onTodoAdded(description: string) {
    if (description === '' || description.length < 0) return;

    this.todos.push({
      id: crypto.randomUUID(),
      description: description,
      done: false,
    });

    this.emitNext();
  }

  onTodoDeleted(id: string) {
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
    this.emitNext();
  }

  onUpdateTodo(id: string) {
    const newTodos = this.todos.map((todo) => {
      return {
        id: todo.id,
        description: todo.description,
        done: todo.id === id ? true : todo.done,
      };
    });

    this.todos = newTodos;
    this.emitNext();
  }
}
