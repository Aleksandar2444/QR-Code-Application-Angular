import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-non-alcoholic-drinks',
  templateUrl: './non-alcoholic-drinks.component.html',
  styleUrls: ['./non-alcoholic-drinks.component.css'],
})
export class NonAlcoholicDrinksComponent implements OnInit {
  public promotionPriceBool: boolean = false;
  public nonAlcoholicDrinks: Entity[] = [
    {
      id: 1,
      name: 'Вода Роса / Rosa Water',
      price: '50ден.',
    },
    {
      id: 11,
      name: 'Вода Јана / Jana Water',
      price: '50ден.',
    },
    {
      id: 2,
      name: 'Добра Вода / Dobra Voda Water',
      price: '60ден.',
    },
    {
      id: 3,
      name: 'Кока Кола / Coca Cola',
      price: '70ден.',
    },
    {
      id: 4,
      name: 'Фанта / Fanta',
      price: '70ден.',
    },
    {
      id: 5,
      name: 'Швепс / Schweppes',
      price: '70ден.',
    },
    {
      id: 6,
      name: 'Тоник / Tonic',
      price: '70ден.',
    },
    {
      id: 7,
      name: 'Цедевита / Cedevita',
      price: '60ден.',
    },
    {
      id: 8,
      name: 'Леден Чај / Ice Tea',
      price: '80ден.',
    },
    {
      id: 9,
      name: 'Густи Сокови / Juices',
      price: '80ден',
    },
    {
      id: 10,
      name: 'Ред Бул / Red Bull',
      price: '150ден',
    },
  ];

  //Fresh Juices
  public freshJuices: Entity[] = [
    {
      id: 1,
      name: 'Soda Citron 250мл',
      description: '(цеден лимон со газирана вода)',
      price: '90ден.',
    },
    {
      id: 2,
      name: 'Refresher 250мл',
      description: '(ананас, јаболка, лимон, ѓумбир)',
      price: '100ден.',
    },
    {
      id: 3,
      name: 'Immunobooster 250мл',
      description: '(портокал, калинка, јаболка)',
      price: '100ден.',
    },
    {
      id: 4,
      name: 'Ginger Shot 100мл',
      description: '(ѓумбир, лимон, куркума, црн бибер)',
      price: '100ден.',
    },
    {
      id: 5,
      name: 'Портокал / Orange Juice 250мл',
      price: '100ден.',
    },
    {
      id: 6,
      name: 'Јаболка / Apple Juice 250мл',
      price: '100ден.',
    },
    {
      id: 7,
      name: 'Ананас / Pineaple Juice 250мл',
      price: '150ден.',
    },
    {
      id: 8,
      name: 'Калинка / Pomegranate Juice 250мл',
      price: '150ден.',
    },
  ];

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
