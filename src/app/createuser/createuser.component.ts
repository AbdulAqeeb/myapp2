import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { domainValidator } from '../validators.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email, domainValidator]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    type: new FormControl(),
    // bussFee : new FormControl(),
    // hostelFee : new FormControl(),

    cards: new FormArray([])
  })

  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }

addcard(){
  this.cardsFormArray.push(
    new FormGroup({
      number : new FormControl(),
      expiry : new FormControl(),
      cvv : new FormControl,
    })
  )
}
deletecard(i:number){
  this.cardsFormArray.removeAt(i)
 }

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'daySchoolor') {
          // Add Busfee>>>>>!!!

          this.userForm.addControl('busFee', new FormControl(null, [Validators.min(10000)]));
          this.userForm.removeControl('hostelFee');

        }

        else if (data == 'residential') {
          // Add Hostel Fee

          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee');

        }
      }
    )

  }

  submit() {

    this.userForm.markAllAsTouched(),
      console.log(this.userForm);
  }
}
