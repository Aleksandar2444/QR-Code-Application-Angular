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
  public promotionPriceBool: boolean = false;

  public today: Date = new Date();

  public coffee: Entity[] = [
    {
      id: 1,
      name: 'Espresso Classico',
      price: '60ден.',
      description:
        '(класичен италијанско еспресо во мала шоља, идеален за почеток на денот)',
    },
    {
      id: 2,
      name: 'Espresso Arrabica',
      price: '100ден.',
      description: '(100% Арабика за вистински љубители на кафе)',
    },
    {
      id: 3,
      name: 'Espresso Doppio',
      price: '100ден.',
      description:
        '(дупла доза на кафе, за побрзо будење и подобра концетрација)',
    },
    {
      id: 4,
      name: 'Espresso Arrabica Doppio',
      price: '140ден.',
      description: '(100% Арабика за вистински љубители на кафе)',
    },
    {
      id: 5,
      name: 'Americano',
      price: '60ден.',
      description:
        '(за подолго уживање, класичен еспресо со додаток на топла вода)',
    },
    {
      id: 6,
      name: 'Freddo Espresso',
      price: '70ден.',
      description: '(претходно изладено еспресо послужено врз коцки лед)',
    },
    {
      id: 7,
      name: 'Freddo Espresso Doppio',
      price: '140ден.',
      description: '(претходно изладено дупло еспресо послужено врз коцки лед)',
    },
    {
      id: 8,
      name: 'Freddo Espresso Arrabica',
      price: '140ден.',
      description:
        '(претходно изладено еспресо Арабика послужено врз коцки лед)',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // this.today.setDate(this.today.getDate() + 4);
    // this.today.setHours(0,1,0);
    // console.log(this.today);

    this.coffee.forEach(element => {
      if (element.promotion) {
        element.id = -1;
        element.id++;


        this.promotionPriceBool = true;
      }
    });

    this.coffee.sort((a, b) => a.id - b.id);

    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const fifth = first + 4;
    const friday = new Date(today.setDate(fifth));

    const sixth = first + 5;
    const saturday = new Date(today.setDate(sixth));

    const seventh = first + 6;
    const sunday = new Date(today.setDate(seventh));

    // console.log(friday);
    // console.log(saturday);
    // console.log(sunday);

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
    } else if (this.today.getDate() === sunday.getDate()) {
      sunday.setHours(5, 0, 0);

      if (this.today < sunday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else {
      this.cocktailBool = false;
    }
  }
}
