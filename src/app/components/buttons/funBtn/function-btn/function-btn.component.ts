import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-function-btn',
  templateUrl: './function-btn.component.html',
  styleUrls: ['./function-btn.component.css']
})
export class FunctionBtnComponent extends ButtonComponent {

  override type1: string = "function";

  onFunctionButtonClick(fun : any){
  console.log("in onFunctionButtonClick")
  console.log(this.type1)
  this.onClick.emit(fun)
  }

}
