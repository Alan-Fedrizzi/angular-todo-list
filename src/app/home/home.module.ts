import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
  ],
})
export class HomePageModule {}
