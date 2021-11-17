import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorCpfComponent } from './produtor-cpf.component';

describe('ProdutorCpfComponent', () => {
  let component: ProdutorCpfComponent;
  let fixture: ComponentFixture<ProdutorCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorCpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
