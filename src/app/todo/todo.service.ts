import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoResponse} from "./model/TodoResponse";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http:HttpClient) { }
  public getTodo():Observable<TodoResponse>{
    return this.http.get<TodoResponse>('api/todos')
  }
}
