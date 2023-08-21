import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, sequenceEqual} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token =  sessionStorage
        .getItem('token'); //ambil token
    return next //update nilai request
        .handle(request.clone({setHeaders:{ authorization:`Bearer ${token}`}}));
  }
}
