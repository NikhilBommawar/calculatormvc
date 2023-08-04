import { Component, Input } from '@angular/core';
import { CalculatorModel } from './calculatorModel';
import { InputModel } from 'src/app/models/InputModel';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
 
})

export class CalculatorComponent {

 
constructor(private backend : BackendService){}

  @Input() id : any; 
  options : any ="nikhil"; 
  value: string = "0";
  operand !: string;
  num !: number;
  stack: any = [];
  resultStack: any = [];
  key: any;
  readonly input: any;
  undoIndex: number = 0;
  errors: any;

  numId = "numeric"
  funId = "fun"
  opId = "op"



calculatorModel : CalculatorModel = new CalculatorModel();



 // NUMERIC BUTTON HANDLER
 numBtnHandler(key: string) {
  this.value += key;
  console.log(key)
  this.setDisplay(this.value);
}


setDisplay(value: string) {
  this.value = value;
}

getDisplay() {
 console.log("getDisplay" + this.value)
 return this.value;
}

evaluate(stack: any): any {
  const _this = this;
  this.backend.eval(stack).subscribe(
    (response: any) => {
        this.value = response;
        this.setDisplay(this.value);
        this.resultStack.push(response)
        console.log("resultStack in evaluate ", this.resultStack)
        this.undoIndex += 1;
    }
    ,
    (error: any) =>  {
       this.errors = error;
       console.log(error);
       console.log("Sorry this action can only be permitted by ADMIN")
      //  this.router.navigateByUrl("/accessDenied");
       let msg = alert("Sorry this action can only be permitted to ADMIN")

    }
  );

}

// OPERATION BUTTON HANDLER
operationBtnHandler(key: any) {
  this.key = key;
  if (key == '=') {
    console.log("this.undoIndex in op ",this.undoIndex)
    console.log("this.resultStack in op ",this.resultStack)

    if(this.undoIndex < this.resultStack.length){
      this.resultStack.splice(this.undoIndex+1)
      
    }
    this.pushNumber();
    console.log("The complate stack array going to backend ", this.stack);
    this.evaluate(this.stack);
     this.stack.splice(0);

  }
  else {
    console.log(key)
    this.pushNumber();
    this.pushOperator();
    console.log(this.stack);
    this.value = "";
    this.setDisplay(this.value);

  }
}

// FUNCTION BUTTON HANDLER
functionBtnHandler(key: string) {
  if (key === 'AC') {
    this.value = '';
    this.setDisplay(this.value);
    this.stack.splice(0);
    this.resultStack.splice(0);
    this.undoIndex = 0;

  }
 
  else if (key === 'DEL') {
    this.value = this.getDisplay();
    let value2 = this.value + "";
    this.value = value2.slice(0, -1);
    this.setDisplay(this.value);
  }

   // UNDO handler
  else if (key === 'UNDO') {
     if (this.undoIndex-2 >= 0) {
      console.log("resultStack in undo ",this.resultStack)
      this.undoIndex -= 1;
      console.log("resultStack Index ", this.resultStack.length-1 )
      console.log("undoIndex ", this.undoIndex )
      this.value = this.resultStack[this.undoIndex - 1]
    }
    else{
      this.value = this.resultStack[0]
    }
  }

   // REDO handler
  else {
     if (this.undoIndex+2 <= this.resultStack.length) {
      console.log("resultStack in redo ",this.resultStack)
       this.undoIndex += 1;
      console.log("redo " ,this.resultStack[this.undoIndex])
      console.log("undoIndex ", this.undoIndex )
      this.value = this.resultStack[this.undoIndex]
    }
    else{
      this.value = this.resultStack[this.resultStack.length-1]
    }
  }

}

pushNumber() {
  if (this.value != '') {
    let input = new InputModel();
    input.type = "NUMBER";
    input.value = this.getDisplay() + "";
    this.stack.push(input)
  }
}

pushOperator() {
  let input = new InputModel();
  input.type = "OPERATOR";

  switch (this.key) {

    case "+":
      input.value = "add";
      break;

    case "-":
      input.value = "subtract";
      break;

    case "*":
      input.value = "multiply";
      break;

    case "/":
      input.value = "division";
      break;

  }

  this.stack.push(input)

}




}


