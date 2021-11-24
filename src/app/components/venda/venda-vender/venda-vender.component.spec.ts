import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaVenderComponent } from './venda-vender.component';

describe('VendaVenderComponent', () => {
  let component: VendaVenderComponent;
  let fixture: ComponentFixture<VendaVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaVenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
