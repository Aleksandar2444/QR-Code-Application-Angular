import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {
  public breakfast: Entity[] = [
    {
      id: 1,
      name: 'Breakfast combo',
      price: '220ден.',
      description: 'Coffee / Tea + Fresh Juice + Croissant / Spinach pie',
    },
    {
      id: 2,
      name: 'Комбинација за појадок',
      price: '220ден.',
      description: 'Кафе / Чај + Цеден сок + Кроасан / Пита со спанаќ',
    },
  ];

  constructor() {}


  ngOnInit(): void {}


}
