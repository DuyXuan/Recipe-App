import { DetailComponent } from './recipe-book/recipes/detail/detail.component';
import { FormComponent } from './recipe-book/recipes/form/form.component';
import { ShoppingListComponent } from './recipe-book/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './recipe-book/recipes/edit/edit.component';
import { AddGroupButtonComponent } from './recipe-book/shopping-list/add-group-button/add-group-button.component';
import { UpdateDeleteGroupBtnComponent } from './recipe-book/shopping-list/update-delete-group-btn/update-delete-group-btn.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      {
        path: 'recipeForm',
        component: FormComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
    ],
  },
  {
    path: 'shopping',
    component: ShoppingListComponent,
    children: [
      { path: 'add', component: AddGroupButtonComponent },
      {
        path: 'custom',
        component: UpdateDeleteGroupBtnComponent,
      },
    ],
  },

  { path: 'recipeForm', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  RecipesComponent,
  ShoppingListComponent,
  FormComponent,
  DetailComponent,
  EditComponent,
  AddGroupButtonComponent,
  UpdateDeleteGroupBtnComponent,
];
