import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeCadastrarComponent } from './propriedade-cadastrar.component';

describe('PropriedadeCadastrarComponent', () => {
  let component: PropriedadeCadastrarComponent;
  let fixture: ComponentFixture<PropriedadeCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadeCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
