import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-alchocol-drinks',
  templateUrl: './alchocol-drinks.component.html',
  styleUrls: ['./alchocol-drinks.component.css'],
})
export class AlchocolDrinksComponent implements OnInit {
  //*Beer
  public beer: Entity[] = [
    {
      id: 1,
      name: 'Скопско / Skopsko 0,33ml',
      price: '80ден.',
    },
    {
      id: 2,
      name: 'Златен Даб / Zlaten Dab 0,33ml',
      price: '80ден.',
    },
    {
      id: 3,
      name: 'Амстел / Amstel 0,33ml',
      price: '100ден.',
    },
    {
      id: 4,
      name: 'Туборг / Tuborg 0,33ml',
      price: '100ден.',
    },
    {
      id: 5,
      name: 'Хајнекен / Heineken 0,33ml',
      price: '120ден.',
    },
    {
      id: 6,
      name: 'Старопрамен / Staropramen 0,50ml',
      price: '150ден.',
    },
    {
      id: 7,
      name: 'Корона / Corona 0,33ml',
      price: '160ден.',
    },
    {
      id: 8,
      name: 'Пуланер / Paulaner 0,50ml',
      price: '200ден.',
    },
    {
      id: 9,
      name: 'Гинес / Guinness 0,33ml',
      price: '200ден.',
    },
  ];

  //*Martini
  public martini: Entity[] = [
    {
      id: 10,
      name: 'Мартини Бјанко / Martini Bianco 0.5ml',
      price: '100ден.',
    },
    {
      id: 11,
      name: 'Кампари / Campari 0,5ml',
      price: '110ден.',
    },
  ];

  //*Digestifs
  public digestifs: Entity[] = [
    {
      id: 12,
      name: 'Пелинковац / Pelinkovac 0.5ml',
      price: '80ден.',
    },
    {
      id: 13,
      name: 'Урсус / Ursus 0,5ml',
      price: '110ден.',
    },
    {
      id: 14,
      name: 'Јагермајстер / Jagermeister 0,5ml',
      price: '120ден.',
    },
  ];

  //*Gin
  public gin: Entity[] = [
    {
      id: 15,
      name: 'Сакс / Sax 0.5ml',
      price: '80ден.',
    },
    {
      id: 16,
      name: 'Бомбај / Bombaj 0,5ml',
      price: '120ден.',
    },
    {
      id: 17,
      name: 'Гордонс / Gordons 0,5ml',
      price: '110ден.',
    },
    {
      id: 18,
      name: 'Танкерај / Tankeray 0,5ml',
      price: '140ден.',
    },
    {
      id: 19,
      name: 'Хендрикс / Hendricks 0,5ml',
      price: '220ден.',
    },
  ];

  //*Rum
  public rum: Entity[] = [
    {
      id: 20,
      name: 'Капетан Морган / Captain Morgan 0.5ml',
      price: '100ден.',
    },
    {
      id: 21,
      name: 'Бакарди / Bacardi 0,5ml',
      price: '120ден.',
    },
  ];

  //*Liquers
  public liquers: Entity[] = [
    {
      id: 22,
      name: 'Малибу / Malubu 0.5ml',
      price: '100ден.',
    },
    {
      id: 23,
      name: 'Арчерс / Archers 0,5ml',
      price: '100ден.',
    },
    {
      id: 24,
      name: 'Бејлис / Bailys 0,5ml',
      price: '120ден.',
    },
  ];

  //*Vodka
  public vodka: Entity[] = [
    {
      id: 25,
      name: 'Смирнов / Smirnoff 0.5ml',
      price: '100ден.',
    },
    {
      id: 26,
      name: 'Финландија / Finlandija 0,5ml',
      price: '100ден.',
    },
    {
      id: 27,
      name: 'Абсолут / Absolut 0,5ml',
      price: '120ден.',
    },
    {
      id: 28,
      name: 'Белведере / Belvedere 0,5ml',
      price: '330ден.',
    },
    {
      id: 29,
      name: 'Греј Гус / Grey Goose 0,5ml',
      price: '330ден.',
    },
  ];

  //*Cognac
  public cognac: Entity[] = [
    {
      id: 30,
      name: 'Хенесеј / Hennesy 0.5ml',
      price: '250ден.',
    },
    {
      id: 31,
      name: 'Курвоазје / Courvoisier 0,5ml',
      price: '300ден.',
    },
    {
      id: 32,
      name: 'Реми Мартин / Remmy Martin 0,5ml',
      price: '350ден.',
    },
  ];

  //*Brandy
  public brandy: Entity[] = [
    {
      id: 33,
      name: 'Бадел / Badel 0.5ml',
      price: '80ден.',
    },
    {
      id: 34,
      name: 'Вињак Рубин / Rubin Vinjak 0,5ml',
      price: '80ден.',
    },
    {
      id: 35,
      name: 'Шток / Stock 0,5ml',
      price: '90ден.',
    },
  ];

  //*Tequila
  public tequila: Entity[] = [
    {
      id: 36,
      name: 'Сиера Силвер / Sierra Silver 0.5ml',
      price: '100ден.',
    },
    {
      id: 37,
      name: 'Сиера Голд / Sierra Gold 0,5ml',
      price: '100ден.',
    },
    {
      id: 38,
      name: 'Хозе Куерво / Jose Cuervo 0,5ml',
      price: '150ден.',
    },
  ];

  //*Whisky
  public whisky: Entity[] = [
    {
      id: 39,
      name: 'Џони-Валкер Ред Лабер / Johnny-Walker Red Label 0.5ml',
      price: '150ден.',
    },
    {
      id: 40,
      name: 'J&B 0,5ml',
      price: '150ден.',
    },
    {
      id: 41,
      name: 'Манки Шолдер / Moneky Shoulder 0,5ml',
      price: '250ден.',
    },
    {
      id: 42,
      name: 'Џони Валкер Блек Лабел / Johhny Walker Black Label 0,5ml',
      price: '250ден.',
    },
    {
      id: 43,
      name: 'Чивас Регал 12 / Chivas Regal 12 0,5ml',
      price: '250ден.',
    },
    {
      id: 44,
      name: 'Glenfiddich Select 0,5ml',
      price: '300ден.',
    },
    {
      id: 45,
      name: 'Dimple Golder Selection 0,5ml',
      price: '300ден.',
    },
    {
      id: 46,
      name: 'Карду / Cardhu 0,5ml',
      price: '350ден.',
    },
  ];

  //*Irish
  public irishWhisky: Entity[] = [
    {
      id: 47,
      name: 'Џејмисон / Jameson 0.5ml',
      price: '150ден.',
    },
    {
      id: 48,
      name: 'Бушмилс 0,5ml',
      price: '160ден.',
    },
    {
      id: 49,
      name: 'Бушмилс блек барел 0,5ml',
      price: '220ден.',
    },
    {
      id: 50,
      name: 'Jameson Black barrel 0,5ml',
      price: '300ден.',
    },
  ];

  //*Bourbon
  public bourbonWhisky: Entity[] = [
    {
      id: 51,
      name: 'Џим Бим / Jim Beam 0.5ml',
      price: '170ден.',
    },
    {
      id: 52,
      name: 'Фоур Розес / Four Rouses 0,5ml',
      price: '170ден.',
    },
  ];

  //*American
  public americanWhisky: Entity[] = [
    {
      id: 53,
      name: 'Џек Даниелс / Jack Daniels 0.5ml',
      price: '200ден.',
    },
    {
      id: 54,
      name: 'Џек Даниелс Хани / Jack Daniels Honey 0,5ml',
      price: '220ден.',
    },
    {
      id: 55,
      name: 'Џентлемен Џек / Gentleman Jack 0,5ml',
      price: '250ден.',
    },
  ];

  constructor() {}

  toggleBeer: boolean = false;
  toggleMartini: boolean = false;
  toggleDigest: boolean = false;
  toggleGin: boolean = false;
  toggleRum: boolean = false;
  toggleLiquer: boolean = false;
  toggleVodka: boolean = false;
  toggleCognac: boolean = false;
  toggleBrendi: boolean = false;
  toggleTequila: boolean = false;
  toggleWhiskey: boolean = false;

  ngOnInit(): void {
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

  //  this.coffeeWithMilk.forEach(element => {
  //    if (element.promotion) {
  //      element.id = -1;
  //      element.id++;

  //      this.promotionPriceBool = true;
  //    }
  //  });

  // this.coffeeWithMilk.sort((a, b) => a.id - b.id);

  ToggleBeers() {
    this.toggleBeer = !this.toggleBeer;

    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleMartinis() {
    this.toggleMartini = !this.toggleMartini;
    this.toggleBeer = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleDigestives() {
    this.toggleDigest = !this.toggleDigest;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleGins() {
    this.toggleGin = !this.toggleGin;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleRums() {
    this.toggleRum = !this.toggleRum;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleLiquers() {
    this.toggleLiquer = !this.toggleLiquer;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleVodkas() {
    this.toggleVodka = !this.toggleVodka;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleCognacs() {
    this.toggleCognac = !this.toggleCognac;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleBrandys() {
    this.toggleBrendi = !this.toggleBrendi;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleTequila = false;
    this.toggleWhiskey = false;
  }

  ToggleTequilas() {
    this.toggleTequila = !this.toggleTequila;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleWhiskey = false;
  }

  ToggleWhiskies() {
    this.toggleWhiskey = !this.toggleWhiskey;
    this.toggleBeer = false;
    this.toggleMartini = false;
    this.toggleDigest = false;
    this.toggleGin = false;
    this.toggleRum = false;
    this.toggleLiquer = false;
    this.toggleVodka = false;
    this.toggleCognac = false;
    this.toggleBrendi = false;
    this.toggleTequila = false;
  }
}
