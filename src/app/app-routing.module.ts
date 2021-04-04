import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '@auth0/auth0-angular';



const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "cart", component: CartComponent,canActivate: [AuthGuard],},
  {path: "checkout", component: CheckoutComponent,canActivate: [AuthGuard],},
  {path: "profile", component: ProfileComponent,canActivate: [AuthGuard],}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
