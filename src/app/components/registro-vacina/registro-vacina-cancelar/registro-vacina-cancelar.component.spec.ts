import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVacinaCancelarComponent } from './registro-vacina-cancelar.component';

describe('RegistroVacinaCancelarComponent', () => {
  let component: RegistroVacinaCancelarComponent;
  let fixture: ComponentFixture<RegistroVacinaCancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVacinaCancelarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVacinaCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
