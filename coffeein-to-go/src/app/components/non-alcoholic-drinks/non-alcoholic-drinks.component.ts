import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-non-alcoholic-drinks',
  templateUrl: './non-alcoholic-drinks.component.html',
  styleUrls: ['./non-alcoholic-drinks.component.css']
})
export class NonAlcoholicDrinksComponent implements OnInit {
  public nonAlcoholicDrinks: Entity[] = [
    {
      name: 'Вода Роса / Rosa Water',
      price: '50ден.'
    },
    {
      name: 'Вода Јана / Jana Water',
      price: '50ден.'
    },
    {
      name: 'Добра Вода / Dobra Voda Water',
      price: '60ден.'
    },
    {
      name: 'Кока Кола / Coca Cola',
      price: '70ден.'
    },
    {
      name: 'Фанта / Fanta',
      price: '70ден.'
    },
    {
      name: 'Швепс / Schweppes',
      price: '70ден.'
    },
    {
      name: 'Тоник / Tonic',
      price: '70ден.'
    },
    {
      name: 'Цедевита / Cedevita',
      price: '60ден.'
    },
    {
      name: 'Леден Чај / Ice Tea',
      price: '80ден.'
    },
    {
      name: 'Густи Сокови / Juices',
      price: '80ден'
    },
    {
      name: 'Ред Бул / Red Bull',
      price: '150ден'
    }
  ];

  constructor() { }

  toggle :boolean = false

  ngOnInit(): void {


  }

  OpenEntity() {
    this.toggle = !this.toggle;
  }

}
