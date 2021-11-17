import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeInscricaoComponent } from './propriedade-inscricao.component';

describe('PropriedadeInscricaoComponent', () => {
  let component: PropriedadeInscricaoComponent;
  let fixture: ComponentFixture<PropriedadeInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadeInscricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
