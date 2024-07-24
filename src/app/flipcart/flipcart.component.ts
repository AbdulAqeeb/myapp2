import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent  {

  public : string = "";

  filter(){
    this.products = this.products.filter((value:any)=>value.name.includes());
  }

  onlyFreeDelivery(){
    this.products = this.products.filter((value:any)=>value.fd);
  }

  
  public products : any = [
  {name:'pen', price:10, rating:3, fd:true},
  {name:'phone', price:50000, rating:2, fd:false},
  {name:'shirt', price:1000, rating:4, fd:true},
  {name:'cap', price:500, rating:5, fd:false},
  {name:'mobilcase', price:200, rating:2.5, fd:true},
  {name:'remote', price:300, rating:3.5, fd:false},
  {name:'watch', price:2000, rating:4.5, fd:true
    
  }
 ]

}
