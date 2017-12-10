import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifySearchComponent } from './spotify-search.component';
import { SpotifySearchService } from "./spotify-search.service";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "../../../shared/services/api.service";
import { LogService } from "../../../shared/services/log.service";

describe('SpotifySearchComponent', () => {
  let component: SpotifySearchComponent;
  let fixture: ComponentFixture<SpotifySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SpotifySearchComponent ],
      providers: [HttpClientModule, SpotifySearchService, ApiService, LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
