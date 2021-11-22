import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVacinaDetalhesComponent } from './registro-vacina-detalhes.component';

describe('RegistroVacinaDetalhesComponent', () => {
  let component: RegistroVacinaDetalhesComponent;
  let fixture: ComponentFixture<RegistroVacinaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVacinaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVacinaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
