import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
@Input() public ap : string = "";
public bp : string = "xxxx";

catch(value:any){
  this.bp = value;
}

 
}



