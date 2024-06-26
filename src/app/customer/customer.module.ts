import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BuyerDashboardComponent,
    CheckoutComponent,
    SellerDashboardComponent,
    SigninSignupComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule
    
  ],

  exports:[
    SigninSignupComponent
  ]
})
export class CustomerModule { }
