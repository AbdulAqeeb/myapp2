import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { Routes } from '@angular/router';

const routes:Routes = [
  {path:'card-payment', component:CardPaymentComponent},
  {path:'upi-paymnet',component:UpiPaymentComponent}
];

@NgModule({
  declarations: [
    UpiPaymentComponent,
    CardPaymentComponent,
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
