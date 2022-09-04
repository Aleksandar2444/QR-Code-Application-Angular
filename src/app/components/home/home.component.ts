import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {fadeInOnEnterAnimation, fadeOutOnLeaveAnimation} from 'angular-animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()]
})
export class HomeComponent implements OnInit {
  public year = new Date().getFullYear();

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
