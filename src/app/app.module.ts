import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FormComponent } from './recipe-book/recipes/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './recipe-book/recipes/detail/detail.component';
import { EditComponent } from './recipe-book/recipes/edit/edit.component';
import { AddGroupButtonComponent } from './recipe-book/shopping-list/add-group-button/add-group-button.component';
import { UpdateDeleteGroupBtnComponent } from './recipe-book/shopping-list/update-delete-group-btn/update-delete-group-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    routingComponents,
    FormComponent,
    DetailComponent,
    EditComponent,
    AddGroupButtonComponent,
    UpdateDeleteGroupBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
