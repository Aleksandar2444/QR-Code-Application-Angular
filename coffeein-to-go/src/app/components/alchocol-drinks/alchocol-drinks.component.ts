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
      name: 'Скопско / Skopsko 0,33ml',
      price: '80ден.',
    },
    {
      name: 'Златен Даб / Zlaten Dab 0,33ml',
      price: '80ден.',
    },
    {
      name: 'Амстел / Amstel 0,33ml',
      price: '100ден.',
    },
    {
      name: 'Туборг / Tuborg 0,33ml',
      price: '100ден.',
    },
    {
      name: 'Хајнекен / Heineken 0,33ml',
      price: '120ден.',
    },
    {
      name: 'Старопрамен / Staropramen 0,50ml',
      price: '150ден.',
    },
    {
      name: 'Корона / Corona 0,33ml',
      price: '160ден.',
    },
    {
      name: 'Пуланер / Paulaner 0,50ml',
      price: '200ден.',
    },
    {
      name: 'Гинес / Guinness 0,33ml',
      price: '200ден.',
    },
  ];

  //*Martini
  public martini: Entity[] = [
    {
      name: 'Мартини Бјанко / Martini Bianco 0.5ml',
      price: '100ден.',
    },
    {
      name: 'Кампари / Campari 0,5ml',
      price: '110ден.',
    },
  ];

  //*Digestifs
  public digestifs: Entity[] = [
    {
      name: 'Пелинковац / Pelinkovac 0.5ml',
      price: '80ден.',
    },
    {
      name: 'Урсус / Ursus 0,5ml',
      price: '110ден.',
    },
    {
      name: 'Јагермајстер / Jagermeister 0,5ml',
      price: '120ден.',
    },
  ];

  //*Gin
  public gin: Entity[] = [
    {
      name: 'Сакс / Sax 0.5ml',
      price: '80ден.',
    },
    {
      name: 'Бомбај / Bombaj 0,5ml',
      price: '120ден.',
    },
    {
      name: 'Гордонс / Gordons 0,5ml',
      price: '110ден.',
    },
    {
      name: 'Танкерај / Tankeray 0,5ml',
      price: '140ден.',
    },
    {
      name: 'Хендрикс / Hendricks 0,5ml',
      price: '220ден.',
    },
  ];

  //*Rum
  public rum: Entity[] = [
    {
      name: 'Капетан Морган / Captain Morgan 0.5ml',
      price: '100ден.',
    },
    {
      name: 'Бакарди / Bacardi 0,5ml',
      price: '120ден.',
    },
  ];

  //*Liquers
  public liquers: Entity[] = [
    {
      name: 'Малибу / Malubu 0.5ml',
      price: '100ден.',
    },
    {
      name: 'Арчерс / Archers 0,5ml',
      price: '100ден.',
    },
    {
      name: 'Бејлис / Bailys 0,5ml',
      price: '120ден.',
    },
  ];

  //*Vodka
  public vodka: Entity[] = [
    {
      name: 'Смирнов / Smirnoff 0.5ml',
      price: '100ден.',
    },
    {
      name: 'Финландија / Finlandija 0,5ml',
      price: '100ден.',
    },
    {
      name: 'Абсолут / Absolut 0,5ml',
      price: '120ден.',
    },
    {
      name: 'Белведере / Belvedere 0,5ml',
      price: '330ден.',
    },
    {
      name: 'Греј Гус / Grey Goose 0,5ml',
      price: '330ден.',
    },
  ];

  //*Cognac
  public cognac: Entity[] = [
    {
      name: 'Хенесеј / Hennesy 0.5ml',
      price: '250ден.',
    },
    {
      name: 'Курвоазје / Courvoisier 0,5ml',
      price: '300ден.',
    },
    {
      name: 'Реми Мартин / Remmy Martin 0,5ml',
      price: '350ден.',
    },
  ];

  //*Brandy
  public brandy: Entity[] = [
    {
      name: 'Бадел / Badel 0.5ml',
      price: '80ден.',
    },
    {
      name: 'Вињак Рубин / Rubin Vinjak 0,5ml',
      price: '80ден.',
    },
    {
      name: 'Шток / Stock 0,5ml',
      price: '90ден.',
    },
  ];

  //*Tequila
  public tequila: Entity[] = [
    {
      name: 'Сиера Силвер / Sierra Silver 0.5ml',
      price: '100ден.',
    },
    {
      name: 'Сиера Голд / Sierra Gold 0,5ml',
      price: '100ден.',
    },
    {
      name: 'Хозе Куерво / Jose Cuervo 0,5ml',
      price: '150ден.',
    },
  ];

  //*Whisky
  public whisky: Entity[] = [
    {
      name: 'Џони Валкер Ред Лабер / Johnny Walker Red Laber 0.5ml',
      price: '150ден.',
    },
    {
      name: 'J&B 0,5ml',
      price: '150ден.',
    },
    {
      name: 'Манки Шолдер / Moneky Shoulder 0,5ml',
      price: '250ден.',
    },
    {
      name: 'Џони Валкер Блек Лабел / Johhny walker Black Label 0,5ml',
      price: '250ден.',
    },
    {
      name: 'Чивас Регал 12 / Chivas Regal 12 0,5ml',
      price: '250ден.',
    },
    {
      name: 'Glenfiddich Select 0,5ml',
      price: '300ден.',
    },
    {
      name: 'Dimple Golder Selection 0,5ml',
      price: '300ден.',
    },
    {
      name: 'Карду / Cardhu 0,5ml',
      price: '350ден.',
    },
  ];

  //*Irish
  public irishWhisky: Entity[] = [
    {
      name: 'Џејмисон / Jameson 0.5ml',
      price: '150ден.',
    },
    {
      name: 'Бушмилс 0,5ml',
      price: '160ден.',
    },
    {
      name: 'Бушмилс блек барел 0,5ml',
      price: '220ден.',
    },
    {
      name: 'Jameson Black barrel 0,5ml',
      price: '300ден.',
    },
  ];

  //*Bourbon
  public bourbonWhisky: Entity[] = [
    {
      name: 'Џим Бим / Jim Beam 0.5ml',
      price: '170ден.',
    },
    {
      name: 'Фоур Розес / Four Rouses 0,5ml',
      price: '170ден.',
    },
  ];

  //*American
  public americanWhisky: Entity[] = [
    {
      name: 'Џек Даниелс / Jack Daniels 0.5ml',
      price: '200ден.',
    },
    {
      name: 'Џек Даниелс Хани / Jack Daniels Honey 0,5ml',
      price: '220ден.',
    },
    {
      name: 'Џентлемен Џек / Gentleman Jack 0,5ml',
      price: '250ден.',
    },
  ];

  constructor() {}

  toggle: boolean = false;
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

  ngOnInit(): void {}

  OpenEntity() {
    this.toggle = !this.toggle;
  }

  ToggleBeers() {
    this.toggleBeer = !this.toggleBeer;

  this.toggleMartini = false;
  this.toggleDigest = false;
  this.toggleGin = false;
  this.toggleRum = false;
  this.toggleLiquer = false;
  this.toggleVodka = false;
  this.toggleCognac= false;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
  this.toggleBrendi = false;
  this.toggleTequila = false;
  this.toggleWhiskey = false;
  }

  ToggleCognacs() {
    this.toggleCognac= !this.toggleCognac;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
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
  this.toggleCognac= false;
  this.toggleBrendi = false;
  this.toggleTequila = false;
  }
}
