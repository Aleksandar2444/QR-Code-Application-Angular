import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-fresh-juices',
  templateUrl: './fresh-juices.component.html',
  styleUrls: ['./fresh-juices.component.css'],
})
export class FreshJuicesComponent implements OnInit {
  public freshJuices: Entity[] = [
    {
      name: 'Soda Citron 250мл',
      description: '(цеден лимон со газирана вода)',
      price: '90ден.',
    },
    {
      name: 'Refresher 250мл',
      description: '(ананас, јаболка, лимон, ѓумбир)',
      price: '100ден.',
    },
    {
      name: 'Immunobooster 250мл',
      description: '(портокал, калинка, јаболка)',
      price: '100ден.',
    },
    {
      name: 'Ginger Shot 100мл',
      description: '(ѓумбир, лимон, куркума, црн бибер)',
      price: '100ден.',
    },
    {
      name: 'Портокал / Orange Juice 250мл',
      price: '100ден.',
    },
    {
      name: 'Јаболка / Apple Juice 250мл',
      price: '100ден.',
    },
    {
      name: 'Ананас / Pineaple Juice 250мл',
      price: '150ден.',
    },
    {
      name: 'Калинка / Pomegranate Juice 250мл',
      price: '150ден.',
    },
  ];

  constructor() {}



  ngOnInit(): void {}


}
