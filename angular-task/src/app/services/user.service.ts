import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = environment.API;
  private user: User | undefined;
  errorMessage: any;
  constructor(private http: HttpClient) { }

  createUser(u: User) {
    u.id = uuidv4();
    console.log(u);
    this.verifyUserExist(u.email)
      .subscribe(
        exist => {
          if (exist) {
            console.log('Usuario ja existe!')
          } else {
            this.postUser(u);
          }
        }
      )
  }

  verifyUserExist(email: string): Observable<Boolean> {
    let parameters = new HttpParams();
    parameters = parameters.append('email', email);
    return this.http.get(this.API + '/users', { params: parameters }).pipe(
      switchMap((response: any) => {
        if (response.length > 0) {
          return of(true)
        } else {
          return of(false)
        }
      })
    );
  }

  postUser(u: User) {
    this.http.post<User>(this.API + '/users', u).subscribe({
      next: data => {
        console.log('Deu certo!');
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }

  getUser(id: string) {
    let parameters = new HttpParams();
    parameters = parameters.append('id', id);

    return this.http.get(this.API + '/users', { params: parameters }).pipe(
      map((data: any) => {
        if (data.length > 0) {
          this.user = data[0];
          return this.user;
        } else {
          throw throwError('Usuario não encontrado')
        }
      }))
  }

  getCurrentUser() {
    return this.user;
  }

  resetUser() {
    this.user = undefined;
  }
}


