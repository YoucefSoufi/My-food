import { TestBed } from '@angular/core/testing';

import { DonnesRefApiService } from './donnes-ref-api.service';

describe('DonnesRefApiService', () => {
  let service: DonnesRefApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonnesRefApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
