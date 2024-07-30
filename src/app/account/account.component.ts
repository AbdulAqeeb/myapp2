import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

public accounts: any = [];

public term:string = "";

public column: string = "";

public order: string = "";

public limit : number = 0;

public pageNo : number = 0;

  constructor(private _accountService:AccountService) {
    this._accountService.getaccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert("Internal error")
      }
    )
  }

  Filter(){
    this._accountService.getFilter(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert("Invalid Account")
      }
    )

  }
  sort(){
    this._accountService.getSortaccounts(this.column , this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }

  page(){
    this._accountService.getpagedaccounts(this.limit , this.pageNo).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("page not found")
      }
    )
  }
}
