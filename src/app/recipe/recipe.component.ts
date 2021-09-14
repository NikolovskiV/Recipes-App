import { Component, OnInit } from '@angular/core';
import { ComponentservicesService } from '../componentservices.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  dataFromRecepies: any;
  id: string;
  recipes: any;
  idMeals: any;
  meals: any;
  strMeal: any;
  strArea: any;
  strMealThumb: any;
  strInstructions: any;
  strMeasure1: any;
  strIngredient1: any;
  strMeasure2: any;
  strIngredient2: any;
  strMeasure3: any;
  strIngredient3: any;
  strMeasure4: any;
  strIngredient4: any;
  strMeasure5: any;
  strIngredient5: any;
  strMeasure6: any;
  strIngredient6: any;
  strIngredient7: any;
  strMeasure7: any;
  strIngredient8: any;
  strMeasure8: any;
  strIngredient9: any;
  strMeasure9: any;
  strIngredient10: any;
  strMeasure10: any;
  strIngredient11: any;
  strMeasure11: any;
  strIngredient12: any;
  strMeasure12: any;
  strIngredient13: any;
  strMeasure13: any;
  strIngredient14: any;
  strMeasure14: any;
  strIngredient15: any;
  strMeasure15: any;
  strIngredient16: any;
  strMeasure16: any;
  strIngredient17: any;
  strMeasure17: any;
  strIngredient18: any;
  strMeasure18: any;
  strIngredient19: any;
  strMeasure19: any;
  strIngredient20: any;
  strMeasure20: any;

constructor(private componentService: ComponentservicesService, private router: Router, private route: ActivatedRoute, ) {
    this.route.params.subscribe(params => {
     this.id = params['id'];
   });
}

changeRoute(category = 'beef'){
    this.router.navigate(['details'], {state: {data: this.recipes.strCategory}})
  }


ngOnInit(): void {
  this.getData();
}

addToCart() {
    this.componentService.addToCart(this.recipes);
    window.alert('Your product has been added to the cart!');
  }

getData(){
      //this.dataFromRecepies = history.state.data;
      //console.log("this.dataFromRecepies -> " + JSON.stringify(this.dataFromRecepies));
      //this.mealName = this.dataFromRecepies.strCategory;
      this.componentService.getRecipe(this.id).subscribe(res =>{
        this.recipes = res.meals[0];
        console.log(this.recipes)
      });

    }

}
