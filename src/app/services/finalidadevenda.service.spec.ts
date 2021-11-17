import { TestBed } from '@angular/core/testing';

import { FinalidadevendaService } from './finalidadevenda.service';

describe('FinalidadevendaService', () => {
  let service: FinalidadevendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalidadevendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
