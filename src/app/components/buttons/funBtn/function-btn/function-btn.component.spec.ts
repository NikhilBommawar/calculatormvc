import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionBtnComponent } from './function-btn.component';
import { ButtonComponent } from '../../button/button.component';

describe('FunctionBtnComponent', () => {
  let component: FunctionBtnComponent;
  let fixture: ComponentFixture<FunctionBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionBtnComponent,ButtonComponent]
    });
    fixture = TestBed.createComponent(FunctionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test2
  it('value of local variable type1 should be function', () => {
   expect(component.type1).toBe("function")
  });

 
 });
