import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import Swal from 'sweetalert2';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const token =  sessionStorage
          .getItem('tokens'); //ambil token
      return next //update nilai request
          .handle(request.clone({setHeaders:{ authorization:`Bearer ${token}`}})).pipe(
            catchError((error:HttpErrorResponse)=>{
              console.log(error.status)
              if(error.status===401){
                console.log('Logiiiiiiiinn')
                this.showLoading()
              }
              else if (error.status>=504){
                this.showLoading()
              }
              return throwError(()=>{
                return error
              }
            )
          }
        )
      )
    }

  showLoading() {
    Swal.fire({
      title: 'Loading...',
      html: '<div class="lds-dual-ring"></div>',
      showConfirmButton: false,
      allowOutsideClick: false
    });

    // Menyembunyikan popup loading setelah 3 detik
    setTimeout(() => {
      Swal.close();
    }, 3000);
  }
}
