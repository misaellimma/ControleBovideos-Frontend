import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVacinaComponent } from './registro-vacina.component';

describe('RegistroVacinaComponent', () => {
  let component: RegistroVacinaComponent;
  let fixture: ComponentFixture<RegistroVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
