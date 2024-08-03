import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { CartComponent } from './cart/cart.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateuserComponent } from './createuser/createuser.component';
import { NotifyGuard } from './notify.guard';
import { CalcualtorComponent } from './calcualtor/calcualtor.component';
import { ParentComponent } from './parent/parent.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { MyntraComponent } from './myntra/myntra.component';
// import { RatingParentComponent } from './rating-parent/rating-parent.component';

import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { ParentCarditemComponent } from './parent-carditem/parent-carditem.component';
// import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],  component:DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'employestable', component:EmployestableComponent},
    {path:'eventregistration',component:EventregistrationComponent},
    {path:'cart', component:CartComponent},
    {path:'flipcart', component:FlipcartComponent},
    {path:'myntra', component:MyntraComponent},
    // {path:'email', component:EmailComponent},
    {path:'account', component:AccountComponent},
    {path:'create-account', component:CreateAccountComponent},
    {path:'createuser',canActivate:[NotifyGuard], component:CreateuserComponent},
    {path:'parent',component:ParentComponent},
    {path:'calculator',component:CalcualtorComponent},
    {path:'rating-parent',component:RatingParentComponent},
    {path:'aboutcompany',component:AboutCompanyComponent},
    {path:'parent-carditem', component:ParentCarditemComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }

  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
