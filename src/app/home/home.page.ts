import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() todos: Todo[];

  constructor(private todoService: TodoService, private http: HttpClient) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.todosUpdated.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  fetchData(section: string) {
    const test = this.http
      .get<{
        id: number;
        title: string;
        content: string;
        slug: string;
        order: number;
        teste: { subteste_1: string; subteste_2: string };
      }>(
        `http://institucional-medgrupo-wp.local/wp-json/templarios/home/${section}`
      )
      .subscribe((data) => {
        console.log(data);
        console.log(data.id);
        console.log(data.title);
        console.log(data.content);
        console.log(data.slug);
        console.log(data.order);
        console.log(data.teste);
      });
  }
}
