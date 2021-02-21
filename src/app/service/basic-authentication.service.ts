import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constants';




const TOKEN = 'token';
const AUTHENTICATED_USER = 'authenticatedUser';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  // authenticate(username, password) {
  //   if (username === "defaultuser" && password === "dummy") {
  //     sessionStorage.setItem('authenticatedUser', username)
  //     return true;
  //   }

  //   return false;

  // }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }

    return null;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeJWTAuthenticationService(username, password) {

    

    return this.http.post<any>(`${API_URL}/authenticate`,
    {username,password}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data
        }
      )
    );
  }


}
export class AuthenticationBean {
  constructor(public message: string) { }
}

