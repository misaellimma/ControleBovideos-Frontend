import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeProdutorComponent } from './propriedade-produtor.component';

describe('PropriedadeProdutorComponent', () => {
  let component: PropriedadeProdutorComponent;
  let fixture: ComponentFixture<PropriedadeProdutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadeProdutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
