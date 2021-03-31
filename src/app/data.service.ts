import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  pizzas = [
  {id: 1, name: "Pepperoni", description: "Lots of pepperoni, and lots of cheese! This firm favourite deserves it’s place at the top of the PizzazTin list.",
  ingredients: "Pizza sauce, mozzarella, pepperoni",image: "pepperoni.jpeg", price: 1.99},
  {id: 2, name: "Supreme", description: "Hot on the heels of pepperoni is Supreme, THE pizza I grew up with. The one rule I have about supreme? It’s gotta have at least TWO meats. Otherwise, it’s just another pizza…",
  ingredients: "Pizza sauce, mozzarella, bacon, onion, beef mince, capsicum, pepperoni, mushroom, olives",
  image: "supreme.jpeg", price: 1.99},
  {id: 3, name: "Hawaiian", description: "If you think you don’t like Hawaiian pizza, that’s because you haven’t tried homemade! I used to be one of “those people”",
  ingredients: "Pizza sauce, mozzarella, ham, pineapple",
  image: "hawaii.jpeg", price: 1.99},
  {id: 4, name: "BBQ Meatlovers", description: "You don’t even need to use a fancy BBQ sauce here. Any generic store bought BBQ sauce is fine – this one is all about the toppings!",
  ingredients: "BBQ sauce, mozzarella, pepperoni, bacon, cabanossi, beef mince, ham",
  image: "meatlovers.jpeg", price: 1.99},
  {id: 5, name: "Garlic butter prawns and chilli", description: "Huge Aussie favourite, a pizza topped with garlic prawns AND finished with a drizzle of garlic butter. Heaven in the form of a pizza!",
  ingredients: "Pizza sauce, mozzarella, garlic butter prawns, capsicum, onion, chilli, rocket",
  image: "prawn.jpeg", price: 1.99},
  {id: 6, name: "Sausage & Kale", description: "If there was ever a way to get someone to eat kale, this is it!",
  ingredients: "Pizza sauce, mozzarella, sausage, kale",
  image: "sausage.jpeg", price: 1.99},
  {id: 7, name: "Margherita", description: "Classic Italian favourite, one of the best examples of how simple is best! This pizza truly is magnificent.",
  ingredients: "Pizza sauce, buffalo mozzarella, basil, olive oil, salt",
  image: "margherita.jpeg", price: 1.99},
  ];



  public getPizzas():Array<any>{
      return this.pizzas;
    }
}
