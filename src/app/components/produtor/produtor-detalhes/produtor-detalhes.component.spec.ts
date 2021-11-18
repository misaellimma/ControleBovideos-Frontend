import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorDetalhesComponent } from './produtor-detalhes.component';

describe('ProdutorDetalhesComponent', () => {
  let component: ProdutorDetalhesComponent;
  let fixture: ComponentFixture<ProdutorDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
