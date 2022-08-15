import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CoffeeWithMilkComponent } from './components/coffee-with-milk/coffee-with-milk.component';

@NgModule({
  declarations: [AppComponent, CoffeeComponent, CoffeeWithMilkComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
