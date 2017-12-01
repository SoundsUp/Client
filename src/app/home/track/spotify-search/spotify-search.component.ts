import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { SpotifySearchService } from './spotify-search.service';
import { SpotifyTrack } from "../../../shared/models/spotify-track.model";

@Component({
  selector: 'app-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.less']
})
export class SpotifySearchComponent implements OnInit {
  @Output() tracks = new EventEmitter<SpotifyTrack[]>();
  private searchTerms = new Subject<string>();

  constructor(private spotifyService: SpotifySearchService) {
  }

  ngOnInit(): void {
    this.spotifyService.fetchApplicationToken();

    this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      // switch to new observable each time the term changes
      .switchMap(term => this.spotifyService.search(term))
      .subscribe(
        (tracks) => {
          console.log('tracks', tracks);
          this.tracks.emit(tracks)},
        (error) => {
          this.tracks.emit([])
        }
      );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
