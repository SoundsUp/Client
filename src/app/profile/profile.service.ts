import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';

import { ApiService } from "../shared/services/api.service";
import { Endpoint } from "../shared/enums/endpoint.enum";
import { User } from "../shared/models/user.model";

@Injectable()
export class ProfileService {
  private url: string;

  constructor(private http: HttpClient,
              private apiService: ApiService) {
    this.url = this.apiService.getUrl(Endpoint.Users);
  }


  /** GET user by id. Return 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => this.apiService.log(`fetched user id=${id}`)),
        catchError(this.apiService.handleError<User>(`getUser id=${id}`))
      );
  }
}
