import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit{

  public num : string = "";

  public names : string[] = [];

  
  ngOnInit(): void {
  }

  
  reg()
  {
    if(this.num!=""){
      this.names.push(this.num.trim());
      this.num="";
    }
  }
}

