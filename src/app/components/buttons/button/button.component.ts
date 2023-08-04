import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() id:any;
  @Input() numId:any ="";
  @Input() type1:string ='button';  // for checking functionality on OnInit
  @Input() label :any = '' ;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  

  onButtonClick(label:any) {
    console.log("in onButtonClick")
    console.log(this.type1)
    this.onClick.emit(label);
  }
}
