import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilService } from './services/util.service';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UtilService,
    TodoService
  ]
})
export class CoreModule { }
