import { TestBed } from '@angular/core/testing';

import { RebanhoService } from './rebanho.service';

describe('RebanhoService', () => {
  let service: RebanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebanhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
