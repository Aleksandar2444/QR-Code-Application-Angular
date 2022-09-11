import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { NonAlcoholicDrinksComponent } from './components/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { AlchocolDrinksComponent } from './components/alchocol-drinks/alchocol-drinks.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    NonAlcoholicDrinksComponent,
    BreakfastComponent,
    AlchocolDrinksComponent,
    CocktailsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
