import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditosComponent } from './editos.component';

describe('EditosComponent', () => {
  let component: EditosComponent;
  let fixture: ComponentFixture<EditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
