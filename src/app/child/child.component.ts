import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public ac:string = "xxxx";

  public bc : string = "";

  // EVENT CREATE

  @Output() public bEvent:EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  send(){
    // EVENT EMIT
    this.bEvent.emit(this.bc);7
  
  }
}
