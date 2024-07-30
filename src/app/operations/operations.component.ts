import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  @Input() public n1 : number = 0;
  @Input() public n2 : number = 0; 

  @Output() public bEvent : EventEmitter<number> = new EventEmitter();

  @Output() public result : EventEmitter<number> = new EventEmitter();

  sum(){
    this.result.emit(this.n1+this.n2)
  }
  mul(){
    this.result.emit(this.n1*this.n2)
  }
}
