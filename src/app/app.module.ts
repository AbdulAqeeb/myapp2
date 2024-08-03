import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AboutComponent } from './about/about.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployestableComponent } from './employestable/employestable.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
// import { EmailComponent } from './email/email.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { CalcualtorComponent } from './calcualtor/calcualtor.component';
import { OperationsComponent } from './operations/operations.component';
import { MyntraComponent } from './myntra/myntra.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { AboutUsModule } from './about-us/about-us.module';
// import { TextAreaComponent } from './text-area/text-area.component';
// import { TextAreachildComponent } from './text-areachild/text-areachild.component';
import { ParentCarditemComponent } from './parent-carditem/parent-carditem.component';
import { ChildCarditemComponent } from './parent-carditem/child-carditem/child-carditem.component';
import { Sibling1Component } from './parent-carditem/sibling1/sibling1.component';
import { Silbling3Component } from './parent-carditem/silbling3/silbling3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    AboutComponent,
    DirectivesComponent,
    PipesComponent,
    EmployestableComponent,
    EventregistrationComponent,
    CartComponent,
    FlipcartComponent,
    AccountComponent,
    CreateAccountComponent,
    CreateuserComponent,
    CapitalDirective,
    PricePipe,
    ChildComponent,
    ParentComponent,
    SiblingComponent,
    Sibling2Component,
    CalcualtorComponent,
    OperationsComponent,
    ParentComponent,
    MyntraComponent,
    RatingParentComponent,
    // TextAreaComponent,
    // TextAreachildComponent,
    ParentCarditemComponent,
    ChildCarditemComponent,
    Sibling1Component,
    Silbling3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule,
   AboutUsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
