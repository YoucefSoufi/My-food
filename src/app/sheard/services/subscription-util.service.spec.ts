import { TestBed } from '@angular/core/testing';

import { SubscriptionUtilService } from './subscription-util.service';

describe('SubscriptionUtilService', () => {
  let service: SubscriptionUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
