import { Component, OnInit } from '@angular/core';
import bakeryDbJson from 'src/assets/drinks_db/bakeryDb.json';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {
  public promotionPriceBool: boolean = false;

  public breakfast: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = bakeryDbJson;

  constructor() {}

  ngOnInit(): void {
    this.breakfast.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.breakfast.sort((a, b) => a.id - b.id);
  }
}
