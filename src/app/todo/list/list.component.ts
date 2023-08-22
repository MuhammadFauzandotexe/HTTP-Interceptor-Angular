import { Component } from '@angular/core';
import {TodoResponse} from "../model/TodoResponse";
import {TodoService} from "../todo.service";
import {Todo} from "../model/Todo";
import {Router} from "@angular/router";
import {map, tap} from "rxjs";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(
      private readonly service:TodoService,
      private readonly router:Router
  ) {}

  payload!:TodoResponse
  todo!:Todo[]

  ngOnInit(){
    this.getTodo()
  }
  getTodo(){
    console.log('errrr')
     this.service.getTodo().subscribe(
         (data)=>{
           console.log(data)
         },
         error => {console.log(error)}
     )



  }
  logout(){
    console.log("Test")
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
