import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-drinks-without-coffein',
  templateUrl: './drinks-without-coffein.component.html',
  styleUrls: ['./drinks-without-coffein.component.css'],
})
export class DrinksWithoutCoffeinComponent implements OnInit {

  public cocktailBool: boolean = false;

  public today: Date = new Date();

  public promotionPriceBool: boolean = false;



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

  constructor() { }



  ngOnInit(): void {

    this.drinksWithoutCoffein.forEach(element => {
      if (element.promotion) {
        element.id = -1;
        element.id++;


        this.promotionPriceBool = true;
      }
    });

    this.drinksWithoutCoffein.sort((a, b) => a.id - b.id);


    // this.today.setDate(this.today.getDate() - 4);
    // this.today.setHours(6,0,0);
    // console.log(this.today);

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
