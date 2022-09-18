import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import coffeeDbJson from 'src/assets/drinks_db/coffeeDb.json';
import coffeeWithMilkDbJson from 'src/assets/drinks_db/coffeeWithMilkDb.json';
import drinksWithoutCoffeinDbJson from 'src/assets/drinks_db/drinksWithoutCoffeinDb.json';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent implements OnInit {
  public coffeeBool: boolean = false;
  public cocktailBool: boolean = false;
  public promotionPriceBool: boolean = false;
  toggleCoffee: boolean = false;
  toggleCoffeeWithMilk: boolean = false;
  toggleDrinksWithoutCoffein: boolean = false;

  public today: Date = new Date();
  public element = document.body;

  //Coffee
  public coffee: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = coffeeDbJson;

  //Coffee With Milk
  public coffeeWithMilk: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = coffeeWithMilkDbJson;

  //Drinks Without Coffein
  public drinksWithoutCoffein: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = drinksWithoutCoffeinDbJson;

  constructor(
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if(localStorage.length >= 1) {
      var test = localStorage.getItem("item_key");

      if(test != null) {
      this.translate.use(test.toString());
      }
    }


    //Coffee
    this.coffee.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.coffee.sort((a, b) => a.id - b.id);

    //Coffee With Milk
    this.coffeeWithMilk.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.coffeeWithMilk.sort((a, b) => a.id - b.id);

    //Drinks Without Coffein
    this.drinksWithoutCoffein.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.drinksWithoutCoffein.sort((a, b) => a.id - b.id);

    //Weekend Agenda
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const fifth = first + 4;
    const friday = new Date(today.setDate(fifth));

    const sixth = first + 5;
    const saturday = new Date(today.setDate(sixth));

    const seventh = first + 6;
    const sunday = new Date(today.setDate(seventh));

    const eight = first - 1;
    const secondSunday = new Date(today.setDate(eight));

    //Weekend logic
    if (this.today.getDate() === friday.getDate()) {
      friday.setHours(21, 0, 0);
      saturday.setHours(5, 0, 0);

      if (this.today > friday && this.today < saturday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else if (this.today.getDate() === saturday.getDate()) {
      if (this.today.getHours() > 4) {
        saturday.setHours(21, 0, 0);
        sunday.setHours(5, 0, 0);
      } else {
        this.cocktailBool = true;
        return;
      }

      if (this.today > saturday && this.today < sunday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else if (this.today.getDate() === secondSunday.getDate()) {
      if (this.today.getHours() > 4) {
        secondSunday.setHours(5, 0, 0);
      } else {
        this.cocktailBool = true;
        return;
      }

      if (this.today < secondSunday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else {
      this.cocktailBool = false;
    }
  }
}
