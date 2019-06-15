import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';

@Injectable()
export class AuthService {
  uri = Constants.AUTH_ENDPOINT;
 
  constructor(private http: HttpClient, private router: Router){ }
  
  login(email: string, password: string) {
    this.http.post(this.uri + '/login', {email: email,password: password})
    .subscribe((resp: any) => {
      localStorage.setItem('auth_token', resp.token);
      switch(resp.role){
        case 'user': 
          this.router.navigate(['main']);
          break;
        case 'admin': 
          this.router.navigate(['admin']);
          break;
        case 'registrator': 
          this.router.navigate(['reg']);
          break;
      }
    });
      
    }
  
  logout() {
    localStorage.removeItem('token');
  }
   
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
 
}
