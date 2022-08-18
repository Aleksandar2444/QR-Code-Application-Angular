import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  public cocktails: Entity[] = [
    {
      name: 'Pink Lady',
      price: '250ден.',
      description: 'Vodka, Lemon, Rasberry',
    },
    {
      name: 'Insider',
      price: '250ден.',
      description: 'Archers, Vodka, Lemon, Pineapple, Egg White',
    },
    {
      name: 'Mango Tai',
      price: '250ден.',
      description: 'Rum, Mango, Orgeat, Lemon, Pineapple',
    },
    {
      name: 'Apple Man',
      price: '250ден.',
      description: 'Rum, Apple, Cinnamon, Lemon',
    },
    {
      name: 'Lolita',
      price: '250ден.',
      description: 'Vodkta, Apple, Pineapple, Lemon',
    },
    {
      name: 'North Side',
      price: '250ден.',
      description: 'Vodka, Martini, Berry`s, Cranberry, Lemon',
    },
    {
      name: 'Lavanda',
      price: '250ден.',
      description: 'Gin, Lavanda, Lemon, Blueberry',
    },
  ];

  constructor() {}



  ngOnInit(): void {}


}
