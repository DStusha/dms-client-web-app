import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email = '';
  password = '';
   
  constructor(private authService: AuthService) { }
  
  Login() {
    this.authService.login(this.email, this.password)
  }

  ngOnInit() {
  }

}
