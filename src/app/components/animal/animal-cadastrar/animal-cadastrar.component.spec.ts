import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCadastrarComponent } from './animal-cadastrar.component';

describe('AnimalCadastrarComponent', () => {
  let component: AnimalCadastrarComponent;
  let fixture: ComponentFixture<AnimalCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
