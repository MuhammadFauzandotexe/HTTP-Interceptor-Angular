import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {AuthRequest} from "../model/auth.request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private readonly service:AuthService,
      private readonly router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    let user:AuthRequest={
      username: this.loginForm.get('username')!.value,
      password:this.loginForm.get('password')!.value
    }
    this.service.login(user).subscribe((data)=>{
      let token:string;
      token = data.data.token
      if (token){
        sessionStorage.setItem("token",token);
        this.router.navigateByUrl('/todo/list');
      }
    })
  }
}
