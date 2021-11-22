import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVacinaCadastrarComponent } from './registro-vacina-cadastrar.component';

describe('RegistroVacinaCadastrarComponent', () => {
  let component: RegistroVacinaCadastrarComponent;
  let fixture: ComponentFixture<RegistroVacinaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVacinaCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVacinaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
