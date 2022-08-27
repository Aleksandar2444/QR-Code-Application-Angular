import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-coffee-with-milk',
  templateUrl: './coffee-with-milk.component.html',
  styleUrls: ['./coffee-with-milk.component.css'],
})
export class CoffeeWithMilkComponent implements OnInit {

  public cocktailBool: boolean = false;

  public today: Date = new Date();

  public promotionPriceBool: boolean = false;

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
      promotion: true,
      promotionPrice: '70ден'
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
      promotion: false
    },
    {
      id: 8,
      name: 'Mocha',
      price: '90ден.',
      description:
        '(дозволи ова комбинација на чоколадо, млеко и кафе да ти го подобри денот)',
      promotion: true
    },
    {
      id: 9,
      name: 'Irish Original',
      price: '200ден.',
      description: '(ирско виски, ирски крем, млеко и спресо шот)',
      promotion: true
    },
  ];

  constructor() { }



  ngOnInit(): void {

    // this.today.setDate(this.today.getDate() + 4);
    // this.today.setHours(13,1,0);
    // console.log(this.today);



    this.coffeeWithMilk.forEach(element => {
      if (element.promotion) {
        element.id = -1;
        element.id++;


        this.promotionPriceBool = true;
      }
    });

    this.coffeeWithMilk.sort((a, b) => a.id - b.id);


    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const fifth = first + 4;
    const friday = new Date(today.setDate(fifth));



    const sixth = first + 5;
    const saturday = new Date(today.setDate(sixth));

    const seventh = first + 6
    const sunday = new Date(today.setDate(seventh));



    // console.log(friday);
    // console.log(saturday);
    // console.log(sunday);




    if (this.today.getDate() === friday.getDate()) {

      friday.setHours(21, 0, 0);
      saturday.setHours(5, 0, 0);

      if (this.today > friday && this.today < saturday) {

        this.cocktailBool = true;
      }
      else {
        this.cocktailBool = false;
      }
    }
    else if (this.today.getDate() === saturday.getDate()) {

      if (this.today.getHours() > 4) {
        saturday.setHours(21, 0, 0);
        sunday.setHours(5, 0, 0);
      }
      else {
        this.cocktailBool = true;
        return;
      }


      if (this.today > saturday && this.today < sunday) {
        this.cocktailBool = true;

      }
      else {
        this.cocktailBool = false;
      }
    }
    else if (this.today.getDate() === sunday.getDate()) {
      sunday.setHours(5, 0, 0)

      if (this.today < sunday) {
        this.cocktailBool = true;
      }
      else {
        this.cocktailBool = false;
      }
    }
    else {
      this.cocktailBool = false;
    }



  }


}
