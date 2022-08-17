import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CoffeeWithMilkComponent } from './components/coffee-with-milk/coffee-with-milk.component';
import { NonAlcoholicDrinksComponent } from './components/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { FreshJuicesComponent } from './components/fresh-juices/fresh-juices.component';
import { DrinksWithoutCoffeinComponent } from './components/drinks-without-coffein/drinks-without-coffein.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { AlchocolDrinksComponent } from './components/alchocol-drinks/alchocol-drinks.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeWithMilkComponent,
    NonAlcoholicDrinksComponent,
    FreshJuicesComponent,
    DrinksWithoutCoffeinComponent,
    BreakfastComponent,
    AlchocolDrinksComponent,
    CocktailsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
