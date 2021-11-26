
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from './../../environments/environment';
import { UserService } from './user.service';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean = false;
  userId: string = "";
  private readonly API = environment.API;

  constructor(private http: HttpClient, private userService: UserService) { }

  loginUser(u: Login) {
    let parameters = new HttpParams();
    parameters = parameters.append('email', u.email);
    parameters = parameters.append('password', u.password);

    return this.http.get(this.API + '/users', { params: parameters }).pipe(
      map((data: any) => {
        if (data.length > 0) {
          this.authenticated = true;
          this.userId = data[0].id;
        } else {
          throw throwError('Usuario errado')
        }
      })
    );
  }

  userAuth() {
    return this.authenticated;
  }

  logOut() {
    this.authenticated = false;
    this.userId = "";
    this.userService.resetUser();
  }
}
