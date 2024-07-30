import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calcualtor',
  templateUrl: './calcualtor.component.html',
  styleUrls: ['./calcualtor.component.css']
})
export class CalcualtorComponent {

  @Input() public num1 : number = 0;

  public num2 : number = 0;

  public result : number = 0;

  catch(value:number){
    this.result =value;
  }

  constructor() { }

 
}
