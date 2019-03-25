import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationService {
  public _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) {}

  login(userName: string, password: string) {
    const body = {
      email: userName,
      password: password
    };
    const apiUrl = environment.apiUrl + 'user/authenticate';
    return this.httpClient.post<any>(apiUrl, body).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  resetPassword(userName: string) {
    const apiUrl = environment.apiUrl + 'user/resetpassword';
    const body = { email: userName };
    return this.httpClient.post<any>(apiUrl, body);
  }
}
