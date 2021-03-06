import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Subscription } from "rxjs/Subscription";
import { tap, catchError } from "rxjs/operators";

import { ApiService } from "./api.service";
import { Endpoint } from "../enums/endpoint.enum";

import { Register } from "../models/register.model";
import { Login } from "../models/login.model";
import { LoginResponseModel } from "../models/login-response.model";
import { User } from "../models/user.model";
import { RouteName } from "../enums/route-name.enum";
import { Session } from "../enums/session.enum";

@Injectable()
export class AuthService {
  authToken: string;
  account: User;


  constructor(private http: HttpClient,
              private apiService: ApiService,
              private router: Router) {
    this.getLocalStorage();
  }

  register(body: Register): Subscription {
    let url = this.apiService.getUrl(Endpoint.Registration);
    return this.http.post<LoginResponseModel>(url, body)
      .pipe(
        tap(_ => this.apiService.log(`Registering user with email: ${body.email}`)),
        catchError(this.apiService.handleError<LoginResponseModel>(`Registration failed}`)),
      )
      .subscribe((registerResponseModel) => this.auth(registerResponseModel));
  }

  login(body: Login): Subscription {
    let url = this.apiService.getUrl(Endpoint.Login);
    return this.http.post<LoginResponseModel>(`${url}`, body)
      .pipe(
        tap(_ => this.apiService.log(`Logging in user with email: ${body.email}`)),
        catchError(this.apiService.handleError<LoginResponseModel>(`Login failed`)),
      )
      .subscribe((loginResponseModel) => this.auth(loginResponseModel));
  }

  auth(loginResponseModel: LoginResponseModel): void {
    console.log(loginResponseModel);
    this.setLocalStorage(loginResponseModel.token, loginResponseModel.account);
    this.router.navigate([`/${RouteName.Home}`]);
  }

  logout(): void {
    this.setLocalStorage(null, null);
    this.router.navigate([`/${RouteName.Login}`]);
  }

  getAuthHeader(): HttpHeaders {
    let token = localStorage.getItem(Session.Token);
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  setLocalStorage(token: string, account: User) {
    this.authToken = token;
    this.account = account;

    localStorage.setItem(Session.Token, token);
    localStorage.setItem(Session.Account, JSON.stringify(account));

  }

  getLocalStorage() {
    this.authToken = localStorage.getItem(Session.Token);
    this.account = JSON.parse(localStorage.getItem(Session.Account));
  }


  getLoggedInUser(): User {
    return this.account;
  }

  isLoggedIn(): boolean {
    return !!this.authToken;
  }

// /** GET user by id. Return 404 if id not found */
// getUser(id: number): Observable<User> {
//   const url = `${this.url}/${id}`;
//   return this.http.get<User>(url)
//     .pipe(
//       tap(_ => this.apiService.log(`fetched user id=${id}`)),
//       catchError(this.apiService.handleError<User>(`getUser id=${id}`))
//     );
// }

}
