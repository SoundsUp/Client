import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackSelectorComponent } from "./track-selector/track-selector.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { TrackComponent } from "./track/track.component";
;
import { ReactiveFormsModule } from "@angular/forms";
import { SpotifySearchComponent } from './spotify-search/spotify-search.component';
import { SpotifySearchService } from "./spotify-search/spotify-search.service";
import { TrackDialogComponent } from "./track-dialog/track-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    SpotifySearchService
  ],
  declarations: [
    TrackSelectorComponent,
    TrackComponent,
    TrackListComponent,
    SpotifySearchComponent,
    TrackDialogComponent
  ],
  exports: [TrackDialogComponent]
})
export class TrackModule { }
