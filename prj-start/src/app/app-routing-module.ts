import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import {HeaderComponent} from './header/header.component'
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingService } from './shopping-list/shopping-list.service';

const appRoute:Routes=[
    {path:'',redirectTo:'/recipes', pathMatch: 'full'},
    {path:'recipes',component:RecipesComponent,children:[
      {path:':id',component:RecipeDetailComponent}
    ]},

    {path:'shopping-list',component:ShoppingListComponent}
    ]

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule],
})

export class AppRoutingModule{

}
