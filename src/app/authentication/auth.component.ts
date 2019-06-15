import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})

export class AuthComponent {
  email = '';
  password = '';
   
  constructor(private authService: AuthService) { }

  Login() {
    this.authService.login(this.email, this.password)
  }

}
