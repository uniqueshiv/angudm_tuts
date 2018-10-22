import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core"

export class ShoppingService{

    ingredientChanged=new EventEmitter<Ingredient[]>();

    ingredients:Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
       return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        console.log(this.ingredients)
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
