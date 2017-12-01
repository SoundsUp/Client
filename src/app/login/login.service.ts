import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { tap, catchError } from "rxjs/operators";
import { ApiService } from "../shared/services/api.service";
import { Endpoint } from "../shared/enums/endpoint.enum";
import { LoginResponseModel } from "../shared/models/loginresponse.model";
import { Login } from "../shared/models/login.model";



@Injectable()
export class LoginService {
  url: string;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.url = this.apiService.getUrl(Endpoint.Login);
  }

  login(body: Login): Observable<LoginResponseModel> {
    const url = `${this.url}`;
    return this.http.post<LoginResponseModel>(url, body)
      .pipe(
      tap(_ => this.apiService.log(`Logging in user with email: ${body.email}`)),
      catchError(this.apiService.handleError<LoginResponseModel>(`Login failed`)),
      );
  }
}
