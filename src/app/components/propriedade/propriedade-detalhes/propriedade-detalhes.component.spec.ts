import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeDetalhesComponent } from './propriedade-detalhes.component';

describe('PropriedadeDetalhesComponent', () => {
  let component: PropriedadeDetalhesComponent;
  let fixture: ComponentFixture<PropriedadeDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadeDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
