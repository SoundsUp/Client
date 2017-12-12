import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";

import { ApiService } from "../../shared/services/api.service";
import { AuthService } from "../../shared/services/auth.service";
import { Endpoint } from "../../shared/enums/endpoint.enum";
import { Conversation } from "../../shared/models/conversation.model";

@Injectable()
export class ConversationsService {

  constructor(private http: HttpClient,
              private apiService: ApiService,
              private authService: AuthService) {
  }

  getCorrespondents(): Observable<Conversation[]> {
    let url = this.apiService.getUrl(Endpoint.Correspondents);
    let headers = this.authService.getAuthHeader();
    let options = {headers: headers};

    console.log('# corresp url', url);

    return this.http.get<Conversation[]>(url, options)
      // .pipe(
      //   tap(_ => this.apiService.log(`Getting correspondents`)),
      //   catchError(this.apiService.handleError<Conversation[]>(`Getting correspondents failed}`)),
      // )
  }
}
