import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-fresh-juices',
  templateUrl: './fresh-juices.component.html',
  styleUrls: ['./fresh-juices.component.css'],
})
export class FreshJuicesComponent implements OnInit {

  public promotionPriceBool: boolean = false;

  public freshJuices: Entity[] = [
    {
      id: 1,
      name: 'Soda Citron 250мл',
      description: '(цеден лимон со газирана вода)',
      price: '90ден.',
    },
    {
      id: 2,
      name: 'Refresher 250мл',
      description: '(ананас, јаболка, лимон, ѓумбир)',
      price: '100ден.',
    },
    {
      id: 3,
      name: 'Immunobooster 250мл',
      description: '(портокал, калинка, јаболка)',
      price: '100ден.',
    },
    {
      id: 4,
      name: 'Ginger Shot 100мл',
      description: '(ѓумбир, лимон, куркума, црн бибер)',
      price: '100ден.',
    },
    {
      id: 5,
      name: 'Портокал / Orange Juice 250мл',
      price: '100ден.',
    },
    {
      id: 6,
      name: 'Јаболка / Apple Juice 250мл',
      price: '100ден.',
    },
    {
      id: 7,
      name: 'Ананас / Pineaple Juice 250мл',
      price: '150ден.',
    },
    {
      id: 8,
      name: 'Калинка / Pomegranate Juice 250мл',
      price: '150ден.',
    },
  ];

  constructor() { }



  ngOnInit(): void {



    this.freshJuices.forEach(element => {
      if (element.promotion) {
        element.id = -1;
        element.id++;


        this.promotionPriceBool = true;
      }
    });

    this.freshJuices.sort((a, b) => a.id - b.id);
  }


}
