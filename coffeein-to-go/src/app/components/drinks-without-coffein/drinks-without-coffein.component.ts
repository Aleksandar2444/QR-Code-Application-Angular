import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-drinks-without-coffein',
  templateUrl: './drinks-without-coffein.component.html',
  styleUrls: ['./drinks-without-coffein.component.css'],
})
export class DrinksWithoutCoffeinComponent implements OnInit {
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



  ngOnInit(): void {}

}
