import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCartComponent } from './line-cart.component';

describe('LineCartComponent', () => {
  let component: LineCartComponent;
  let fixture: ComponentFixture<LineCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
