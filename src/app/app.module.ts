import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/interceptor/auth.interceptor";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
      {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
