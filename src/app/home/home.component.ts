import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataService) { }

  pizzas: Array<any> = [];

  ngOnInit(): void {
    this.pizzas = this.dataService.getPizzas();
  }

}
