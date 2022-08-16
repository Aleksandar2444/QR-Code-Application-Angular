import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/interfaces/coffee';

@Component({
  selector: 'coffee-with-milk',
  templateUrl: './coffee-with-milk.component.html',
  styleUrls: ['./coffee-with-milk.component.css'],
})
export class CoffeeWithMilkComponent implements OnInit {
  public coffeeWithMilk: Coffee[] = [
    {
      name: 'Macchiato',
      price: '70ден.',
      description: '(совршена голтка еспресо потопена во кремасто млеко)',
    },
    {
      name: 'Macchiato Doppio',
      price: '110ден.',
      description:
        '(за подолго уживање, дупла доза на еспресо и кремасто млеко)',
    },
    {
      name: 'Freddo Cappucino',
      price: '80ден.',
      description:
        '(претходно изладено еспресо послушено врз коцки лед и пена)',
    },
    {
      name: 'Freddo Cappucino Doppio',
      price: '140ден.',
      description:
        '(претходно изладено еспресо послушено врз коцки лед и пена)',
    },
    {
      name: 'Latte',
      price: '90ден.',
      description: '(еспресо во кое ќе доминира богата доза млеко и пена)',
    },
    {
      name: 'Espresso con Pana',
      price: '70ден.',
      description: '(еспресо со додаток на домашен млечен крем)',
    },
    {
      name: 'Flat White',
      price: '110ден.',
      description:
        '(игра помеѓу кафе и млеко, каде што доминира вкусот на дупло еспресо)',
    },
    {
      name: 'Mocha',
      price: '90ден.',
      description:
        '(дозволи ова комбинација на чоколадо, млеко и кафе да ти го подобри денот)',
    },
    {
      name: 'Irish Original',
      price: '200ден.',
      description: '(ирско виски, ирски крем, млеко и спресо шот)',
    },
  ];

  constructor() {}

  toggle :boolean = false

  ngOnInit(): void {


  }

  OpenEntity() {
    this.toggle = !this.toggle;
  }
}
