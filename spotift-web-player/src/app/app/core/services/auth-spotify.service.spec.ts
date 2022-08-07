import { TestBed } from '@angular/core/testing';

import { AuthSpotifyService } from './auth-spotify.service';

describe('AuthSpotifyService', () => {
  let service: AuthSpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSpotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
