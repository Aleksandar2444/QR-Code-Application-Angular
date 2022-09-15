import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  test: boolean = false;
  element = document.body;

  public year = new Date().getFullYear();

  constructor(
    public router: Router,
    public translate: TranslateService
    ) {
      translate.addLangs(['en', 'mk']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
    this.test = true;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
