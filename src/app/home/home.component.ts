import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartstateService } from '../cartstate.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataService, 
    private cartState: CartstateService) {

    this.pizzas = this.dataService.getMenu();

   }

  pizzas: Observable<any> ;

  ngOnInit(): void {
    
  }

  addItem(c : any){
    this.cartState.insertItem(c['id'],c['name'],c['price']);
  }
}
