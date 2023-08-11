import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

// test 2 for @Input
 it("@Input label should set label for button",() => {
    component.label = "functionbutton"
    fixture.detectChanges()
    const btnComponent = fixture.debugElement.nativeElement;
    console.log(btnComponent)
    expect(btnComponent.querySelector("button").innerText).toBe("functionbutton")
 })

 // test3 for @Output 
 it('onClick should call a function on button click', () => {
  spyOn(component,"onButtonClick")
  const btnComponent = fixture.debugElement.nativeElement;
  btnComponent.querySelector("button").click()
  expect(component.onButtonClick).toHaveBeenCalled();
});


});
