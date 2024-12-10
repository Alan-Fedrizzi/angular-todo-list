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
  private numberOfTodosLeftSubscription!: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.numberOfTodosLeftSubscription =
      this.todoService.numberOfTodosLeft$.subscribe((n) => {
        this.todosLeft = n;
      });
  }

  ngOnDestroy() {
    if (this.numberOfTodosLeftSubscription) {
      this.numberOfTodosLeftSubscription.unsubscribe();
    }
  }
}
