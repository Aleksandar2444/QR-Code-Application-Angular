import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent implements OnInit {
  public coffeeBool: boolean = false;
  public cocktailBool: boolean = false;

  public today: Date = new Date();

  public coffee: Entity[] = [
    {
      name: 'Espresso Classico',
      price: '60ден.',
      description:
        '(класичен италијанско еспресо во мала шоља, идеален за почеток на денот)',
    },
    {
      name: 'Espresso Arrabica',
      price: '100ден.',
      description: '(100% Арабика за вистински љубители на кафе)',
    },
    {
      name: 'Espresso Doppio',
      price: '100ден.',
      description:
        '(дупла доза на кафе, за побрзо будење и подобра концетрација)',
    },
    {
      name: 'Espresso Arrabica Doppio',
      price: '140ден.',
      description: '(100% Арабика за вистински љубители на кафе)',
    },
    {
      name: 'Americano',
      price: '60ден.',
      description:
        '(за подолго уживање, класичен еспресо со додаток на топла вода)',
    },
    {
      name: 'Freddo Espresso',
      price: '70ден.',
      description: '(претходно изладено еспресо послужено врз коцки лед)',
    },
    {
      name: 'Freddo Espresso Doppio',
      price: '140ден.',
      description: '(претходно изладено дупло еспресо послужено врз коцки лед)',
    },
    {
      name: 'Freddo Espresso Arrabica',
      price: '140ден.',
      description:
        '(претходно изладено еспресо Арабика послужено врз коцки лед)',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    let ninePm = new Date();
    ninePm.setHours(21, 0, 0);

    let fiveAm = new Date();
    fiveAm.setDate(fiveAm.getDate() + 1);
    fiveAm.setHours(5, 0, 0);

    if (this.today.getDay() === 5 || this.today.getDay() === 6) {
      if (this.today >= ninePm && this.today < fiveAm) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    }
  }
}
