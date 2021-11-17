import { TestBed } from '@angular/core/testing';

import { EspecieBovideoService } from './especie-bovideo.service';

describe('EspecieBovideoService', () => {
  let service: EspecieBovideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecieBovideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
