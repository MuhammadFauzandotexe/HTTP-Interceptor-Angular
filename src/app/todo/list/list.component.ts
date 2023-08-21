import { Component } from '@angular/core';
import {TodoResponse} from "../model/TodoResponse";
import {TodoService} from "../todo.service";
import {Todo} from "../model/Todo";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly service:TodoService) {
  }

  payload!:TodoResponse
  todo!:Todo[]

  ngOnInit(){
    this.getTodo()
  }
  getTodo(){
    this.service.getTodo().subscribe((date)=>{
      this.payload = date;
      this.todo = date.data
      console.log(this.todo)
    })
  }
}
