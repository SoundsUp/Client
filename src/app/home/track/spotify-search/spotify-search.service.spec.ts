import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { SpotifySearchService } from './spotify-search.service';
import { ApiService } from "../../../shared/services/api.service";
import { LogService } from "../../../shared/services/log.service";

describe('Spotify Search Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [SpotifySearchService, ApiService, LogService]
      }
    );
  });

  it('should be created', inject([SpotifySearchService], (service: SpotifySearchService) => {
    expect(service).toBeTruthy();
  }));

  describe('search()', () => {

    it('Spotify Api Url should be https://api.spotify.com', inject([SpotifySearchService], (api) => {
      expect(api.spotifyApi).toBe('https://api.spotify.com');

    }));

    it('Should fetch token',
      inject([SpotifySearchService], (searchService) => {
        searchService.getSpotifyToken().subscribe((spotifyToken) => {
          expect(spotifyToken.toBeTruthy());
        });

      }));

    it('Should return tracks',
      inject([SpotifySearchService], (searchService) => {
        searchService.search('avenged').subscribe((tracks) => {
          console.log('tracks', tracks);
          expect(tracks.length).toBe(7);
        });

      }));
  });
});
