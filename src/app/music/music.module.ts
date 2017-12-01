import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicTrackListComponent } from './music-track-list/music-track-list.component';
import { TrackComponent } from './track/track.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackSelectorComponent } from './track-selector/track-selector.component';
import { TrackSearchComponent } from './track-search/track-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicSearchComponent, MusicTrackListComponent, TrackComponent, TrackListComponent, TrackSelectorComponent, TrackSearchComponent]
})
export class MusicModule { }
