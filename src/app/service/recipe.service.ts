import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  recipeList = [
    {
      id: 0,
      name: 'Hamburger',
      imageUrl:
        'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
      description: 'hello',
      ingredient: [
        { ingredientName: 'lemon', ingredientQuantity: 2 },
        { ingredientName: 'banana', ingredientQuantity: 7 },
        { ingredientName: 'apple', ingredientQuantity: 10 },
      ],
    },
    {
      id: 1,
      name: 'SanWitch',
      imageUrl:
        'https://cdn.kiwilimon.com/recetaimagen/30704/th5-640x426-34299.jpg',
      description: 'hola',
      ingredient: [
        { ingredientName: 'coca', ingredientQuantity: 2 },
        { ingredientName: 'pepsi', ingredientQuantity: 9 },
        { ingredientName: 'rice', ingredientQuantity: 27 },
      ],
    },
  ];

  idCounter = 2;
  ingredientIDCounter = 5;
  addRecipe(item) {
    item.id = this.idCounter++;
    this.recipeList.push(item);
  }

  showDetail(id: number) {
    // let result = this.recipeList.filter((item) => item.id == id);

    return this.recipeList.filter((item) => item.id == id)[0];
  }
  delete(selectedRecipe: any) {
    let index = this.recipeList.indexOf(selectedRecipe);
    this.recipeList.splice(index, 1);
  }

  update(id: number, updateRecipe: any) {
    let updateTarget = this.showDetail(id);
    updateTarget.name = updateRecipe.name;
    updateTarget.imageUrl = updateRecipe.imageUrl;
    updateTarget.description = updateRecipe.description;
    updateTarget.ingredient = updateRecipe.ingredient;
  }

  updateIngredientList(id, newAmount, name) {
    let updateTarget = this.showDetail(id).ingredient.filter(
      (item) => item.ingredientName == name
    )[0];
    updateTarget.ingredientQuantity = newAmount;
  }
  deleteIngredient(id, item: any) {
    let index = this.showDetail(id).ingredient.findIndex(
      (data) =>
        data.ingredientName == item.ingredientName &&
        data.ingredientQuantity == item.ingredientQuantity
    );

    this.showDetail(id).ingredient.splice(index, 1);
  }
  addIngredient(id, item) {
    this.showDetail(id).ingredient.push(item);
  }
}
