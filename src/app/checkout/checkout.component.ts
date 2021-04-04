import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartstateService } from '../cartstate.service';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  processing: boolean = true;
  orderConfirm: any = null;
  constructor(private cartState: CartstateService,
    private router: Router,
    private http : HttpClient) { 

    }

  ngOnInit(): void {

    
    this.http.post<any>(env.apiUri + "/api/order", 
                        this.cartState.getItems())
                        .subscribe(order => {
      this.processing = false;
      this.orderConfirm = order;
      this.cartState.clear();
    });
  
  }

}
