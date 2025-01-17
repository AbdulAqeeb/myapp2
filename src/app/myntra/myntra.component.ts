import { Component, Input } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent {

  public myntraProducts:any=[];
  @Input() ratings: any;
          
  
    constructor(private _myntraService:MyntraService) {
      _myntraService.getmyntra().subscribe(
        (data:any)=>{
          this.myntraProducts=data;
        },
        (err:any)=>{
          alert("internal server error...")
        }
      )
     }
  
    ngOnInit(): void {
    }
  
    sortByLowToHigh100() {
      this.myntraProducts = this.myntraProducts
        .filter((myntraProduct: any) => myntraProduct.price >= 0 && myntraProduct.price <= 100)
        .sort((a: any, b: any) => a.price - b.price);
    
    }
  
    sortByLowToHigh300() {
      this.myntraProducts = this.myntraProducts
        .filter((myntraProduct: any) => myntraProduct.price >= 100 && myntraProduct.price <= 300)
        .sort((a: any, b: any) => a.price - b.price);
    
    }
    sortByLowToHigh500() {
      this.myntraProducts = this.myntraProducts
        .filter((myntraProduct: any) => myntraProduct.price >= 300 && myntraProduct.price <= 500)
        .sort((a: any, b: any) => a.price - b.price);
  
    }
    sortByLowToHigh1000() {
      this.myntraProducts = this.myntraProducts
        .filter((myntraProduct: any) => myntraProduct.price >= 500 && myntraProduct.price <= 1000)
        .sort((a: any, b: any) => a.price - b.price);
    }
  
  
    // search(category:string){
    //   this.myntraProducts.category = this.myntraProducts.find( mytraProduct:String=> mytraProduct.category.includes("Men's Clothing"));
    // }
  
  }
  

  

