import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorTodosComponent } from './produtor-todos.component';

describe('ProdutorTodosComponent', () => {
  let component: ProdutorTodosComponent;
  let fixture: ComponentFixture<ProdutorTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
