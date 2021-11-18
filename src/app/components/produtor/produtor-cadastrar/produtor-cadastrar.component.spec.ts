import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorCadastrarComponent } from './produtor-cadastrar.component';

describe('ProdutorCadastrarComponent', () => {
  let component: ProdutorCadastrarComponent;
  let fixture: ComponentFixture<ProdutorCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
