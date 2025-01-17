import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  public accountsForm : FormGroup = new FormGroup({
    
    account_name : new FormControl(),
    account_balance : new FormControl(),
    account_number :new  FormControl(),
    city : new FormControl(),
    profie_picture : new FormControl(),
    id : new FormControl(),
  })

  submit(){
    console.log(this.accountsForm.value)
  }

  
}
