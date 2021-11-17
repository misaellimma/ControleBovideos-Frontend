import { TestBed } from '@angular/core/testing';

import { RegistrovacinaService } from './registrovacina.service';

describe('RegistrovacinaService', () => {
  let service: RegistrovacinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrovacinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
