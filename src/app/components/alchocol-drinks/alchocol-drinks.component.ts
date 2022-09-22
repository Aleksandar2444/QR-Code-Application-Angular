import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import alcoholDbJson from 'src/assets/drinks_db/alcoholDb.json';

@Component({
  selector: 'app-alchocol-drinks',
  templateUrl: './alchocol-drinks.component.html',
  styleUrls: ['./alchocol-drinks.component.css'],
})
export class AlchocolDrinksComponent implements OnInit {

  public panelOpenState: boolean = true;

  //*Beer
  public beer: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[0];

  //*Martini
  public martini: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[1];

  //*Digestifs
  public digestifs: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[2];

  //*Gin
  public gin: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[3];
  //*Rum
  public rum: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[4];

  //*Liquers
  public liquers: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[5];

  //*Vodka
  public vodka: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[6];

  //*Cognac
  public cognac: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[7];

  //*Brandy
  public brandy: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[8];

  //*Tequila
  public tequila: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[9];

  //*Whisky
  public whisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[10];

  //*Irish
  public irishWhisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[11];

  //*Bourbon
  public bourbonWhisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[12];

  //*American
  public americanWhisky: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[13];

  public spritz: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[14];

  public GinAndTonics: {
    id: number;
    name: string;
    price: string;
    description?: string;
    promotionPrice?: string;
  }[] = alcoholDbJson[15];

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


    this.beerPromotion();
    this.martiniPromotion();
    this.digestPromotion();
    this.ginPromotion();
    this.rumPromotion();
    this.liquerPromotion();
    this.vodkaPromotion();
    this.kognacPromotion();
    this.brendiPromotion();
    this.tequilaPromotion();
    this.whiskeyPromotion();
    this.irishPromotion();
    this.burbonPromotion();
    this.americanPromotion();
    this.spritzPromotion();
    this.ginAndTonicPromotion();
  }

  beerPromotion(): void {
    this.beer.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.beer.sort((a, b) => a.id - b.id);
  }

  martiniPromotion(): void {
    this.martini.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.martini.sort((a, b) => a.id - b.id);
  }

  digestPromotion(): void {
    this.digestifs.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.digestifs.sort((a, b) => a.id - b.id);
  }

  ginPromotion(): void {
    this.gin.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.gin.sort((a, b) => a.id - b.id);
  }

  rumPromotion(): void {
    this.rum.forEach((element) => {
      if (element.promotionPrice) {

        element.id = -1;
        element.id++;
      }
    });

    this.rum.sort((a, b) => a.id - b.id);
  }

  liquerPromotion(): void {
    this.liquers.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.liquers.sort((a, b) => a.id - b.id);
  }

  vodkaPromotion(): void {
    this.vodka.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.vodka.sort((a, b) => a.id - b.id);
  }

  kognacPromotion(): void {
    this.cognac.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.cognac.sort((a, b) => a.id - b.id);
  }

  brendiPromotion(): void {
    this.brandy.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.brandy.sort((a, b) => a.id - b.id);
  }

  tequilaPromotion(): void {
    this.tequila.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.tequila.sort((a, b) => a.id - b.id);
  }

  whiskeyPromotion(): void {
    this.whisky.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.whisky.sort((a, b) => a.id - b.id);
  }

  irishPromotion(): void {
    this.irishWhisky.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.irishWhisky.sort((a, b) => a.id - b.id);
  }

  burbonPromotion(): void {
    this.bourbonWhisky.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.bourbonWhisky.sort((a, b) => a.id - b.id);
  }

  americanPromotion(): void {
    this.americanWhisky.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });

    this.americanWhisky.sort((a, b) => a.id - b.id);
  }

  spritzPromotion(): void {
    this.spritz.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });
  }

  ginAndTonicPromotion(): void {
    this.GinAndTonics.forEach((element) => {
      if (element.promotionPrice) {
        element.id = -1;
        element.id++;
      }
    });
  }
}
