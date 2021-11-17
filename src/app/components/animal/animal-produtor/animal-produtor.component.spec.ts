import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProdutorComponent } from './animal-produtor.component';

describe('AnimalProdutorComponent', () => {
  let component: AnimalProdutorComponent;
  let fixture: ComponentFixture<AnimalProdutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalProdutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
