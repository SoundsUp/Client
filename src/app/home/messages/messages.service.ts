import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { ApiService } from "../../shared/services/api.service";
import { AuthService } from "../../shared/services/auth.service";
import { Message } from "../../shared/models/message.model";
import { Endpoint } from "../../shared/enums/endpoint.enum";

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient,
              private apiService: ApiService,
              private authService: AuthService) {
  }

  getMessages(id: number): Observable<Message[]> {
    let url = this.apiService.getUrl(Endpoint.Messages);
    let headers = this.authService.getAuthHeader();
    let options = {headers: headers};

    return this.http.get<Message[]>(`${url}/${id}`, options);
  }

  sendMessage(id: number, message: string): Observable<Message> {
    let url = this.apiService.getUrl(Endpoint.Messages);
    let headers = this.authService.getAuthHeader();
    let options = {headers: headers};
    let body = {
      msgContent: message
    }

    return this.http.post<Message>(`${url}/${id}`, body, options);
  }


}

