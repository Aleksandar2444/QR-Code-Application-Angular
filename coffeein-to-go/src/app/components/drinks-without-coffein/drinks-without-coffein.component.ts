import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-drinks-without-coffein',
  templateUrl: './drinks-without-coffein.component.html',
  styleUrls: ['./drinks-without-coffein.component.css'],
})
export class DrinksWithoutCoffeinComponent implements OnInit {

  public cocktailBool:boolean = false;

  public today:Date = new Date();

  public drinksWithoutCoffein: Entity[] = [
    {
      name: 'Чај',
      price: '70ден.',
      description: '(билен или овошен, прашај персонал)',
    },
    {
      name: 'Топло Чоколадо / Warm Chocolate',
      price: '90ден.',
    },
  ];

  constructor() {}



  ngOnInit(): void {

    let ninePm = new Date();
    ninePm.setHours(21,0,0);
    let fiveAm = new Date();
    fiveAm.setDate(fiveAm.getDate() + 1);
    fiveAm.setHours(5,0,0);


    if(this.today.getDay() === 5 || this.today.getDay() === 6) {

      if(this.today >= ninePm && this.today < fiveAm) {
        this.cocktailBool = true;
      }
      else {
        this.cocktailBool = false;
      }
    }
  }

}
