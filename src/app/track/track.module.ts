import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackSearchComponent } from "./track-search/track-search.component";
import { TrackSelectorComponent } from "./track-selector/track-selector.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { TrackComponent } from "./track/track.component";
import { SpotifySearchService } from "./track-search/spotify-search.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    SpotifySearchService
  ],
  declarations: [
    TrackSearchComponent,
    TrackSelectorComponent,
    TrackComponent,
    TrackListComponent
  ]
})
export class TrackModule { }
