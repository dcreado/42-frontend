import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartstateService } from '../cartstate.service';
import { Pizza } from '../pizza.model';
import { environment as env } from '../../environments/environment';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public items: Pizza[] = [];
  public profile: any

  constructor(private cartState: CartstateService,
    private router: Router,
    public auth: AuthService,
    private http : HttpClient) { 

      http.get<any>(env.apiUri + "/api/profile").subscribe(profile => {
        this.profile = profile;
        if(profile["address"] == undefined ||  
        profile["city"] == undefined ||
        profile["state"] == undefined ||
        profile["state"] == undefined){
          router.navigate(["profile"])
        };
      });
  }

  ngOnInit(): void {
    this.items = this.cartState.getItems();
  }

  remove(c:Pizza){
    this.items = this.cartState.remove(c);
  }

  getTotal() : number{
    var total = 0;
    this.items.forEach(it => total = total + it.qty * it.price);
    return total;
  }

  onChange(entry : any, event : any){
    entry.qty = event.target.value ;
    this.cartState.update(entry.id,event.target.value);
  }

  
}
