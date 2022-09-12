import { Component, OnInit } from '@angular/core';
import nonAlcoholicDrinksDbJson from 'src/assets/drinks_db/nonAlcoholicDrinksDb.json';
import freshJuicesDbJson from 'src/assets/drinks_db/freshJuicesDb.json';

@Component({
  selector: 'app-non-alcoholic-drinks',
  templateUrl: './non-alcoholic-drinks.component.html',
  styleUrls: ['./non-alcoholic-drinks.component.css'],
})
export class NonAlcoholicDrinksComponent implements OnInit {
  public promotionPriceBool: boolean = false;

  public nonAlcoholicDrinks: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = nonAlcoholicDrinksDbJson;

  //Fresh Juices
  public freshJuices: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = freshJuicesDbJson;
  constructor() {}

  toggle: boolean = false;

  ngOnInit(): void {
    //Non alcoholic drinks
    this.nonAlcoholicDrinks.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.nonAlcoholicDrinks.sort((a, b) => a.id - b.id);

    //Fresh juices
    this.freshJuices.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.freshJuices.sort((a, b) => a.id - b.id);
  }

  OpenEntity() {
    this.toggle = !this.toggle;
  }
}
