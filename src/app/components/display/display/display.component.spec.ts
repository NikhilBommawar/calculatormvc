import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { By } from '@angular/platform-browser';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent]
    });
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial value should be null',() =>{
    
    let input = fixture.debugElement.query(By.css("#display")).nativeElement;
    console.log(input)
     expect(input.value ).toBe('');

  })

  it('value set to nikhil',() =>{
    
    let input = fixture.debugElement.query(By.css("#display")).nativeElement;
    console.log(input)
    input.value = "nikhil"
    expect(input.value ).toBe('nikhil');

  })

});
