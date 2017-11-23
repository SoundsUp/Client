import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "./message.service";

@Injectable()
export class AppService {

  private url = "http://localhost:61851/api/users";

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  // getUserx(id: number): Observable<User> {
  //   const url =
  //   return this.http.get<User[]>(this.url)
  //     .pipe(
  //       map(users => users[0]),
  //       tap(users =>  this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  /** GET user by id. Return 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
