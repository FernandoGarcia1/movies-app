import { TestBed } from '@angular/core/testing';

import { TmbdRequestService } from './tmbd-request.service';

describe('TmbdRequestService', () => {
  let service: TmbdRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmbdRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
