import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  test: boolean = false;
  element = document.body;

  public year = new Date().getFullYear();

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.test = true;
  }
}
