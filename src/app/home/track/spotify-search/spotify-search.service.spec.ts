import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { SpotifySearchService } from './spotify-search.service';
import { ApiService } from "../../../shared/services/api.service";



//
// describe('Spotify Search Service', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       providers: [SpotifySearchService, ApiService]}
//     );
//   });
//
//   it('should be created', inject([SpotifySearchService], (service: SpotifySearchService) => {
//     expect(service).toBeTruthy();
//   }));
//
//   describe('search()', () => {
//
//     it('Spotify Api Url should be', inject([SpotifySearchService], (api) => {
//       expect(api.spotifyApi).toBe('https://api.spotify.com');
//
//     }));
//
//     it('Should return Observable<SpotifyTrack[]>',
//       inject([SpotifySearchService], (searchService) => {
//         searchService.search('avenged').subscribe((tracks)=>{
//           expect(tracks.length).toBe(7);
//         });
//
//       }));
//   });
//
//
// });
