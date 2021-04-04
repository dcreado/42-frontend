import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pizza } from './pizza.model';
import { SESSION_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class CartstateService {

  
  
  private STORAGE_KEY = 'shopping-cart';

  private items : Array<Pizza> = [];
  

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { 
    var temp =  this.storage.get(this.STORAGE_KEY, StorageTranscoders.JSON) ;

    if(temp != undefined){
      this.items = temp;
    }
    this.updateSize();
  }

  
  public cartSize: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  insertItem(id: number, name: string, price: number){
    const found_item = this.items.find(it => it.id == id);
    if(found_item != null){
      found_item.qty = found_item.qty + 1;
      
    } else {
      this.items.push(new Pizza(id,name,1,"",price));
    }
    this.updateSize();
    this.storage.set(this.STORAGE_KEY,this.items, StorageTranscoders.JSON);
  }

  getItems() : Array<Pizza> {
    return this.items;
  }  

  remove(item: Pizza) : Array<Pizza> {
    this.items = this.items.filter(it => it.id !== item.id);
    this.updateSize();
    this.storage.set(this.STORAGE_KEY,this.items, StorageTranscoders.JSON);
    return this.getItems();
  }
  
  update(id: number, quantity: number){
    const found_item = this.items.find(it => it.id == id);
    if(found_item == undefined){
      return;
    }
    found_item.qty = quantity;
    this.updateSize();
    this.storage.set(this.STORAGE_KEY,this.items, StorageTranscoders.JSON);
    return this.getItems();
  }

  private updateSize(){
    if(this.items.length == 0){
      this.cartSize.next(0);
    } else {
      this.cartSize.next(this.items.map(val => val.qty).reduce((acc, c) => acc + c));
    }
  }
}
