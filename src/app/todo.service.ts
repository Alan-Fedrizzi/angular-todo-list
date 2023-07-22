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

  // quando clica no checkbox do todo, tem que emitir o update todo para atualizar a lista...
  getTodosLeft() {
    // return this.todos.filter((todo) => !todo.done).length;
    const aa = this.todos.filter((todo) => !todo.done);
    console.log(aa);
    console.log(aa.length);
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

  // está chamando duas vezes.. pq?????????
  // está chamando duas vezes.. pq?????????
  // está chamando duas vezes.. pq?????????
  onTodoChecked(id: string) {
    // const index = this.todos.findIndex((object) => object.id === id);

    // if (index !== -1) {
    //   console.log(this.todos[index].done);
    //   this.todos[index].done = !this.todos[index].done;
    //   console.log(this.todos[index].done);
    // }

    // this.todosUpdated.emit(this.todos.slice());
    console.log(this.todos);

    // console.log(this.todos);
    // const teste = this.todos.forEach((todo) => {
    //   if (todo.id === id) {
    //     console.log(id);
    //     todo.done = !todo.done;
    //   }
    // });
    // console.log(teste);

    // const updatedTodo= this.todos.find((todo) => todo.id === id);
    // if (!updatedTodo) return;
    // updatedTodo.done = !updatedTodo.done;

    // this.todos.find((todo) => todo.id === id)

    // this.todosUpdated.emit(this.todos.slice());
  }
}
