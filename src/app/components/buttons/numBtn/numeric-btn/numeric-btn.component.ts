import { Component, OnInit, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-numeric-btn',
  templateUrl: './numeric-btn.component.html',
  styleUrls: ['./numeric-btn.component.css']
})
export class NumericBtnComponent extends ButtonComponent {

  
   onNumButtonClick(num : any){
    this.onClick.emit(num)
  }
  
}
