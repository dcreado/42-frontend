import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';
import { CartstateService } from '../cartstate.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) public document : Document,
    public auth: AuthService,
    private cartState: CartstateService) { 

      this.cartSize = cartState.cartSize;
    }

  faShoppingCart = faShoppingCart;

  faSignInAlt = faSignInAlt;
  faUser = faUser;
  faPowerOff = faPowerOff;

  cartSize: Observable<number>

  ngOnInit(): void {

    
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.document.location.origin });
  }

}
