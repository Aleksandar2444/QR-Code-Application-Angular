import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-non-alcoholic-drinks',
  templateUrl: './non-alcoholic-drinks.component.html',
  styleUrls: ['./non-alcoholic-drinks.component.css'],
})
export class NonAlcoholicDrinksComponent implements OnInit {
  public nonAlcoholicDrinks: Entity[] = [
    {id: 1,
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

  constructor() {}

  toggle: boolean = false;

  ngOnInit(): void {}

  OpenEntity() {
    this.toggle = !this.toggle;
  }
}
