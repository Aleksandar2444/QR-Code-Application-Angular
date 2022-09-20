import { Component, OnInit } from '@angular/core';
import nonAlcoholicDrinksDbJson from 'src/assets/drinks_db/nonAlcoholicDrinksDb.json';
import freshJuicesDbJson from 'src/assets/drinks_db/freshJuicesDb.json';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(
    public translate: TranslateService

  ) { }

  toggle: boolean = false;

  ngOnInit(): void {
    if (localStorage.length >= 1) {
      var test = localStorage.getItem("item_key");

      if (test != null) {
        this.translate.use(test.toString());
      }
    }


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
