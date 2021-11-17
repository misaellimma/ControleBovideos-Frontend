import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCancelarComponent } from './animal-cancelar.component';

describe('AnimalCancelarComponent', () => {
  let component: AnimalCancelarComponent;
  let fixture: ComponentFixture<AnimalCancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCancelarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
