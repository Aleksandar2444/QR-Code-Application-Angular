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
      id: 1,
      name: 'Pink Lady',
      price: '250ден.',
      description: 'Vodka, Lemon, Rasberry',
    },
    {
      id: 2,
      name: 'Insider',
      price: '250ден.',
      description: 'Archers, Vodka, Lemon, Pineapple, Egg White',
    },
    {
      id: 3,
      name: 'Mango Tai',
      price: '250ден.',
      description: 'Rum, Mango, Orgeat, Lemon, Pineapple',
    },
    {
      id: 4,
      name: 'Apple Man',
      price: '250ден.',
      description: 'Rum, Apple, Cinnamon, Lemon',
    },
    {
      id: 5,
      name: 'Lolita',
      price: '250ден.',
      description: 'Vodkta, Apple, Pineapple, Lemon',
    },
    {
      id: 6,
      name: 'North Side',
      price: '250ден.',
      description: 'Vodka, Martini, Berry`s, Cranberry, Lemon',
    },
    {
      id: 7,
      name: 'Lavanda',
      price: '250ден.',
      description: 'Gin, Lavanda, Lemon, Blueberry',
    },
  ];

  constructor() {}



  ngOnInit(): void {}


}
