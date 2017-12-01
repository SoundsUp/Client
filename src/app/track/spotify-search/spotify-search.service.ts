import { Injectable } from "@angular/core";
// import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Track } from "../../shared/models/track.model";
import { HttpClient } from "@angular/common/http";

import * as res from "./response.json";

@Injectable()
export class SpotifySearchService {
  spotifyApi = 'https://api.spotify.com';
  token = '';

  constructor(private http: HttpClient) {}

  // constructor(private http: Http, private apiService: ApiService) {}

  search(track: string): Observable<Track[]> {
    // if (track) {
    //   let headers = new Headers({"Authorization": `Bearer ${this.token}`});
    //   let options = new RequestOptions({headers: headers});
    //   return
      // this.http.get(`${this.spotifyApi}/v1/search?q=${track}&type=track`, options)
      //   .map((response:any) => response.json().tracks.items as Track[]);
    // } else {
    //   return Observable.of<Track[]>([]);
    // }

    return Observable.of<Track[]>((<any>res).tracks.items as Track[]);

  }

  fetchApplicationToken() {
    // this.http.get(`${this.apiService.url}/spotify/token`)
    //   .map(response => response.json().idToken)
    //   .subscribe(
    //     (token) => this.token = token,
    //     (error)=> this.apiService.handleError(error)
    //   );

  }
}
