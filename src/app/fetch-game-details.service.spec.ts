import { TestBed } from '@angular/core/testing';

import { FetchGameDetailsService } from './fetch-game-details.service';

describe('FetchGameDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchGameDetailsService = TestBed.get(FetchGameDetailsService);
    expect(service).toBeTruthy();
  });
});
