import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeEditarComponent } from './propriedade-editar.component';

describe('PropriedadeEditarComponent', () => {
  let component: PropriedadeEditarComponent;
  let fixture: ComponentFixture<PropriedadeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadeEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
