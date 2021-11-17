import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVacinaPropriedadeComponent } from './registro-vacina-propriedade.component';

describe('RegistroVacinaPropriedadeComponent', () => {
  let component: RegistroVacinaPropriedadeComponent;
  let fixture: ComponentFixture<RegistroVacinaPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVacinaPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVacinaPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
