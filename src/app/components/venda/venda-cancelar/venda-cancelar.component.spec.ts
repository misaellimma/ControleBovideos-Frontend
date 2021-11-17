import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaCancelarComponent } from './venda-cancelar.component';

describe('VendaCancelarComponent', () => {
  let component: VendaCancelarComponent;
  let fixture: ComponentFixture<VendaCancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaCancelarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
