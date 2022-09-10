import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {fadeInOnEnterAnimation, fadeOutOnLeaveAnimation} from 'angular-animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()]
})
export class HomeComponent implements OnInit {
  test: boolean = false;
 element = document.body;

  public year = new Date().getFullYear();

  constructor(public router: Router) {}


  ngOnInit(): void {
    this.test = true;


  }

  ToggleColor() {
    this.element.classList.toggle("backgroundTogglerIn");
  }

  // toggleColorOut() {
  //   let element = document.body;
  //   element.classList.toggle("backgroundTogglerOut")
  // }
}
