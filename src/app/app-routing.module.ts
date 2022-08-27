import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AlchocolDrinksComponent } from "./components/alchocol-drinks/alchocol-drinks.component";
import { BreakfastComponent } from "./components/breakfast/breakfast.component";
import { CocktailsComponent } from "./components/cocktails/cocktails.component";
import { CoffeeWithMilkComponent } from "./components/coffee-with-milk/coffee-with-milk.component";
import { CoffeeComponent } from "./components/coffee/coffee.component";
import { DrinksWithoutCoffeinComponent } from "./components/drinks-without-coffein/drinks-without-coffein.component";
import { FreshJuicesComponent } from "./components/fresh-juices/fresh-juices.component";
import { HomeComponent } from "./components/home/home.component";
import { NonAlcoholicDrinksComponent } from "./components/non-alcoholic-drinks/non-alcoholic-drinks.component";


const routes: Routes = [
  { path: 'app-coffee', component: CoffeeComponent },
  { path: 'coffee-with-milk', component: CoffeeWithMilkComponent },
  { path: 'drinks-without-coffee', component: DrinksWithoutCoffeinComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'non-alcoholic', component: NonAlcoholicDrinksComponent },
  { path: 'fresh-juices', component: FreshJuicesComponent },
  { path: 'alcoholic-drinks', component: AlchocolDrinksComponent },
  { path: 'coctails', component: CocktailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:  '/home', pathMatch: "full" },
  { path: "**", redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
