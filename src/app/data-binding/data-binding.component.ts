import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public age : number = 25;

  public name : string = "sameer"

  public isValid: boolean = true;

  public phone : string = "+91";

 constructor() {}
ngOnInit(): void {
  
}
submit(){
  alert("submit clicked");
}

serach(){
  alert("key pressed in input");
}
}
