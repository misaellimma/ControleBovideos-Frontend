import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaComprasComponent } from './venda-compras.component';

describe('VendaComprasComponent', () => {
  let component: VendaComprasComponent;
  let fixture: ComponentFixture<VendaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
