import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import cocktailsDbJson from 'src/assets/drinks_db/cocktailsDb.json';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  public cocktails: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = cocktailsDbJson;

  constructor(
    public translate: TranslateService

  ) { }

  ngOnInit(): void {

    if (localStorage.length >= 1) {
      var test = localStorage.getItem("item_key");

      if (test != null) {
        this.translate.use(test.toString());
      }
    }


    this.cocktails.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.cocktails.sort((a, b) => a.id - b.id);
  }
}
