import { TestBed } from '@angular/core/testing';

import { RecettesApiService } from './recettes-api.service';

describe('RecettesApiService', () => {
  let service: RecettesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecettesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
