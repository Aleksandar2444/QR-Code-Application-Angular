import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/interfaces/coffee';

@Component({
  selector: 'app-drinks-without-coffein',
  templateUrl: './drinks-without-coffein.component.html',
  styleUrls: ['./drinks-without-coffein.component.css'],
})
export class DrinksWithoutCoffeinComponent implements OnInit {

  public cocktailBool:boolean = false;

  public today:Date = new Date();



  public drinksWithoutCoffein: Entity[] = [
    {
      name: 'Чај',
      price: '70ден.',
      description: '(билен или овошен, прашај персонал)',
    },
    {
      name: 'Топло Чоколадо / Warm Chocolate',
      price: '90ден.',
    },
  ];

  constructor() {}



  ngOnInit(): void {



    console.log(this.today);

    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const fifth = first + 2;
    const friday = new Date(today.setDate(fifth));



    const sixth = first + 3;
    const saturday = new Date(today.setDate(sixth));



  console.log(friday);
  console.log(saturday);


    // let testDate = new Date();
    // testDate.setHours(21,0,0);

    // let testDate2 = new Date();
    // testDate2.setDate(testDate.getDate() + 1)
    // testDate2.setHours(5,0,0);

    if(this.today.getDate()=== friday.getDate() || this.today.getDate() === saturday.getDate() ) {

      friday.setHours(21,0,0);

      if(this.today.getDate() === saturday.getDate()) {



        saturday.setDate(saturday.getDate() + 1);
      }

      saturday.setHours(5,0,0);

      if(this.today > friday && this.today < saturday) {

        this.cocktailBool = true;
      }
      else {
        this.cocktailBool = false;
      }
    }





    console.log(this.today);
    console.log(this.today.getDay());


    // if(this.today.getDay() === 3) {

    //   let fridayninePm = new Date();
    //   fridayninePm.setHours(21,0,0);
    //   let saturdayfiveAm = new Date();
    //   saturdayfiveAm.setDate(saturdayfiveAm.getDate() + 1);
    //   saturdayfiveAm.setHours(5,0,0);

    //   console.log(fridayninePm);
    //   console.log(saturdayfiveAm);

    //   let friday2Am = new Date();
    //   friday2Am.setHours(2,0,0);



    //   if(this.today < friday2Am) {
    //     this.cocktailBool = true;
    //     return;

    //   }


    //   if(this.today >= fridayninePm && this.today < saturdayfiveAm) {
    //     this.cocktailBool = true;
    //   }
    //   else {
    //     this.cocktailBool = false;
    //   }
    // }
    // else if(this.today.getDay() === 6) {

    //   // let saturday12Am = new Date();
    //   // saturday12Am.setHours(24,0,0);





    //   let saturdayNinePm = new Date();
    //   // saturdayNinePm.setDate(saturdayNinePm.getDate() + 1);
    //   saturdayNinePm.setHours(21,0,0);
    //   let sundayFiveAm = new Date();

    //   sundayFiveAm.setDate(sundayFiveAm.getDate() + 1);
    //   sundayFiveAm.setHours(5,0,0);

    //   let saturday2Am = new Date();
    //   saturday2Am.setHours(2,0,0);


    //   if(this.today < saturday2Am) {
    //     this.cocktailBool = true;
    //     return;

    //   }



    //   if(this.today >= saturdayNinePm && this.today < sundayFiveAm) {

    //     this.cocktailBool = true;

    //   }
    //   else {

    //     this.cocktailBool = false;
    //   }

    // }
    // else if(this.today.getDay() === 0) {

    //   let sundayFiveAm = new Date();
    //   sundayFiveAm.setHours(5,0,0);

    //   console.log(sundayFiveAm);


    //   if(this.today < sundayFiveAm) {

    //     this.cocktailBool = true;
    //   }
    //   else {

    //     this.cocktailBool = false;
    //   }

    // }
  }

}
