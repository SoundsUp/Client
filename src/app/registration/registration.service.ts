import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { tap, catchError } from "rxjs/operators";
import { ApiService } from "../shared/services/api.service";
import { Endpoint } from "../shared/enums/endpoint.enum";
import { RegisterResponseModel } from "../shared/models/user.model.1";
import { Register } from "../shared/models/register.model";



@Injectable()
export class RegistrationService {
  url: string;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.url = this.apiService.getUrl(Endpoint.Registration);
  }

  register(body: Register): Observable<RegisterResponseModel> {
    const url = `${this.url}`;
    return this.http.post<RegisterResponseModel>(url, body)
      .pipe(
      tap(_ => this.apiService.log(`Registering user with email: ${body.email}`)),
      catchError(this.apiService.handleError<RegisterResponseModel>(`Registration failed}`)),
      );
  }
}
