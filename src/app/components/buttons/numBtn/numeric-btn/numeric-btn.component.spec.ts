import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericBtnComponent } from './numeric-btn.component';

describe('NumericBtnComponent', () => {
  let component: NumericBtnComponent;
  let fixture: ComponentFixture<NumericBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumericBtnComponent]
    });
    fixture = TestBed.createComponent(NumericBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
