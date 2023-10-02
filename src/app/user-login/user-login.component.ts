import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { authService } from '../Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private authService: authService,
    private router: Router,
    private FB: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email: ['', [Validators.required,  Validators.pattern(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      )]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value)
    .subscribe(
      (response: any) => {
        this.authService.setToken(response.token)
        this.router.navigate(['./users']);
      },
      (error: string) => {
        this.loginForm.setValue({
          email: '',
          password: '',
        });
        window.alert('Invaid credentials')
        console.log("Invaid credentials")
      },
    )
  }
}

