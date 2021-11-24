import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaDetalhesComponent } from './venda-detalhes.component';

describe('VendaDetalhesComponent', () => {
  let component: VendaDetalhesComponent;
  let fixture: ComponentFixture<VendaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
