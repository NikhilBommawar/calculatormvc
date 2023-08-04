import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-operation-btn',
  templateUrl: './operation-btn.component.html',
  styleUrls: ['./operation-btn.component.css']
})
export class OperationBtnComponent extends ButtonComponent {

  onOperationButtonClick(operation : any){
    console.log(" in onOperationButtonClick")
    this.onClick.emit(operation)
  }

}
