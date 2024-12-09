import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  todosLeft: number;
  private todosSubscription!: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.calculateTodosLeft(this.todos);

    this.todosSubscription = this.todoService.todos$.subscribe((todos) => {
      this.calculateTodosLeft(todos);
    });
  }

  ngOnDestroy() {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }

  calculateTodosLeft(todoList: Todo[]) {
    console.log(todoList);
    // console.log(todoList.length);
    const a = todoList.filter((todo) => console.log(todo.done));
    // console.log(a);
    // this.todosLeft = a.length;

    // console.log(this.todosLeft);
  }
}
