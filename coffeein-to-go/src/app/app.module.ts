import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CoffeeWithMilkComponent } from './components/coffee-with-milk/coffee-with-milk.component';
import { NonAlcoholicDrinksComponent } from './components/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { FreshJuicesComponent } from './components/fresh-juices/fresh-juices.component';

@NgModule({
  declarations: [AppComponent, CoffeeComponent, CoffeeWithMilkComponent, NonAlcoholicDrinksComponent, FreshJuicesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
