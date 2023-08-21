import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {AuthResponse} from "./model/auth.response";
import {AuthRequest} from "./model/auth.request";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http:HttpClient) { }
  public login(data:AuthRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>('/api/auth/login',data);
  }

}
