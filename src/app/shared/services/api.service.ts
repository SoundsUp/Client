import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LogService } from "./log.service";
import { Endpoint } from "../enums/endpoint.enum";
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {

  private url = environment.url;

  constructor(private messageService: LogService) {}

  /**
   * Returns the string representation of url corresponding to an api endpoint
   * @param {Endpoint} endpoint represents one of the string constants defined inside the Endpoint enum
   * @returns {string} url of specified endpoint
   */
  public getUrl(endpoint: Endpoint): string {
    console.log('# endpoint', endpoint);
    return `${this.url}/${endpoint}`;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the LogService */
  public log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
