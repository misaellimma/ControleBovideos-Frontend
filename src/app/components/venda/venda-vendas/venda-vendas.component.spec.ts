import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaVendasComponent } from './venda-vendas.component';

describe('VendaVendasComponent', () => {
  let component: VendaVendasComponent;
  let fixture: ComponentFixture<VendaVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
