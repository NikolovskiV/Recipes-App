import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';

@Injectable({
  providedIn: 'root'
})
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

export class ComponentservicesService {

  constructor(private http: HttpClient) { }
   url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
   filterUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
   recipeUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
  getRecipies(){
    return this.http.get<any>(this.url);
  }
  getFilteredRecipes(category: string) {
    return this.http.get<any>(this.filterUrl + category);
  }
  getRecipe( id: string) {
    return this.http.get<any>(this.recipeUrl + id);
  }
  items: RecipeComponent[] = [];

  addToCart(product) {
    this.items.push(product);
    console.log(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    // remove item from arrray using index (splice for instance)
    this.items.splice(index, 1);
    console.log(index);

  }

}
