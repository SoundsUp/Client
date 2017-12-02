import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { SpotifyTrack } from "../../../shared/models/spotify-track.model";
import { ApiService } from "../../../shared/services/api.service";
import { Endpoint } from "../../../shared/enums/endpoint.enum";
import { SpotifyToken } from "../../../shared/models/spotify-token.model";
import { Session } from "../../../shared/enums/session.enum";


@Injectable()
export class SpotifySearchService {
  spotifyApi: string;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.spotifyApi = 'https://api.spotify.com';
  }

  search(track: string): Observable<SpotifyTrack[]> {
    if (track) {
      let token = localStorage.getItem(Session.SpotifyToken);
      console.log('Searching track', track);
      let url = `${this.spotifyApi}/v1/search?q=${track}&type=track`;
      let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      let options = {headers: headers};

      return this.http.get(url, options)
        .map((response: any) => {
          console.log('RESPONSE', response);
          return (<any>response).tracks.items as SpotifyTrack[]
        });

    } else {
      return Observable.of<SpotifyTrack[]>([]);
    }
  }

  fetchApplicationToken() {
    let url = this.apiService.getUrl(Endpoint.SpotifyToken);
    this.http.get<SpotifyToken>(url)
      .map((response: any) => {
        console.log(response);
        return (<SpotifyToken>response).access_token as string
      })
      .subscribe(
        (spotifyToken) => {
          console.log(spotifyToken);
          localStorage.setItem(Session.SpotifyToken, spotifyToken);
        },
        (error) => this.apiService.handleError(error)
      );

  }
}
