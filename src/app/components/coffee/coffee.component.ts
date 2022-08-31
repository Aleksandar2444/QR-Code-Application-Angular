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
  toggleCoffee: boolean = false;
  toggleCoffeeWithMilk: boolean = false;
  toggleDrinksWithoutCoffein: boolean = false;

  public today: Date = new Date();

  //Coffee
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
      promotionPrice: '40ден.',
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

  //Coffee With Milk
  public coffeeWithMilk: Entity[] = [
    {
      id: 1,
      name: 'Macchiato',
      price: '70ден.',
      description: '(совршена голтка еспресо потопена во кремасто млеко)',
    },
    {
      id: 2,
      name: 'Macchiato Doppio',
      price: '110ден.',
      description:
        '(за подолго уживање, дупла доза на еспресо и кремасто млеко)',
    },
    {
      id: 3,
      name: 'Freddo Cappucino',
      price: '80ден.',
      description:
        '(претходно изладено еспресо послушено врз коцки лед и пена)',
    },
    {
      id: 4,
      name: 'Freddo Cappucino Doppio',
      price: '140ден.',
      description:
        '(претходно изладено еспресо послушено врз коцки лед и пена)',
    },
    {
      id: 5,
      name: 'Latte',
      price: '90ден.',
      description: '(еспресо во кое ќе доминира богата доза млеко и пена)',
    },
    {
      id: 6,
      name: 'Espresso con Pana',
      price: '70ден.',
      description: '(еспресо со додаток на домашен млечен крем)',
    },
    {
      id: 7,
      name: 'Flat White',
      price: '110ден.',
      description:
        '(игра помеѓу кафе и млеко, каде што доминира вкусот на дупло еспресо)',
      promotionPrice: '90ден.',
    },
    {
      id: 8,
      name: 'Mocha',
      price: '90ден.',
      description:
        '(дозволи ова комбинација на чоколадо, млеко и кафе да ти го подобри денот)',
      promotionPrice: '70ден.',
    },
    {
      id: 9,
      name: 'Irish Original',
      price: '200ден.',
      description: '(ирско виски, ирски крем, млеко и спресо шот)',
    },
  ];

  //Drinks Without Coffein
  public drinksWithoutCoffein: Entity[] = [
    {
      id: 1,
      name: 'Чај',
      price: '70ден.',
      description: '(билен или овошен, прашај персонал)',
    },
    {
      id: 2,
      name: 'Топло Чоколадо / Warm Chocolate',
      price: '90ден.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.today.setDate(this.today.getDate() + 4);
    // this.today.setHours(0,1,0);
    // console.log(this.today);

    //Coffee
    this.coffee.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.coffee.sort((a, b) => a.id - b.id);

    //Coffee With Milk
    this.coffeeWithMilk.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.coffeeWithMilk.sort((a, b) => a.id - b.id);

    //Drinks Without Coffein
    this.drinksWithoutCoffein.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.drinksWithoutCoffein.sort((a, b) => a.id - b.id);

    //Weekend Agenda
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
      if (this.today.getHours() > 4) {
        sunday.setHours(5, 0, 0);
      } else {
        this.cocktailBool = true;
        return;
      }

      if (this.today < sunday) {
        this.cocktailBool = true;
      } else {
        this.cocktailBool = false;
      }
    } else {
      this.cocktailBool = false;
    }
  }

  // ToggleCoffee() {
  //   this.toggleCoffee = !this.toggleCoffee;
  //   this.toggleCoffeeWithMilk = false;
  //   this.toggleDrinksWithoutCoffein = false;
  // }

  // ToggleCoffeeWithMilk() {
  //   this.toggleCoffeeWithMilk = !this.toggleCoffeeWithMilk;
  //   this.toggleCoffee = false;
  //   this.toggleDrinksWithoutCoffein = false;
  // }

  // ToggleDrinksWithoutCoffein() {
  //   this.toggleDrinksWithoutCoffein = !this.toggleDrinksWithoutCoffein;
  //   this.toggleCoffee = false;
  //   this.toggleCoffeeWithMilk = false;
  // }
}
