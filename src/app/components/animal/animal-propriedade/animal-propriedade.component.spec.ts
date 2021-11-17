import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPropriedadeComponent } from './animal-propriedade.component';

describe('AnimalPropriedadeComponent', () => {
  let component: AnimalPropriedadeComponent;
  let fixture: ComponentFixture<AnimalPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
