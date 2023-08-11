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

  //test 1 
  it('should create', () => {
    expect(component).toBeTruthy();
     });

   //test 2
  it('initial value should be null',() =>{
   let input = fixture.debugElement.query(By.css("#display")).nativeElement;
    console.log(input)
     expect(input.value ).toBe('');
    
   })

  //test 3
  it('value set to Unoveo',() =>{
    let input = fixture.debugElement.query(By.css("#display")).nativeElement;
    console.log(input)
    input.value = "Unoveo"
    expect(input.value ).toBe('Unoveo');
   
  })

});


