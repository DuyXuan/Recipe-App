import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  imageUrl = '';
  recipesForm: FormGroup;
  updateRecipe: any;
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id;
  ngOnInit(): void {
    this.id = this.id = this.route.snapshot.queryParamMap.get('id');
    this.updateRecipe = this.recipeService.showDetail(this.id);
    this.imageUrl = this.updateRecipe.imageUrl;
    this.createForm();
    this.getIngredient();
  }
  getIngredient() {
    let length = this.updateRecipe.ingredient.length;

    for (let i = 0; i < length; i++) {
      this.ingredient.push(
        this.fb.group({
          ingredientName: [
            this.updateRecipe.ingredient[i].ingredientName,
            Validators.required,
          ],
          ingredientQuantity: [
            this.updateRecipe.ingredient[i].ingredientQuantity,
            Validators.required,
          ],
        })
      );
    }
  }
  createForm() {
    this.recipesForm = this.fb.group({
      name: [this.updateRecipe.name, Validators.required],
      imageUrl: [this.updateRecipe.imageUrl, Validators.required],
      description: [this.updateRecipe.description, Validators.required],
      ingredient: this.fb.array([]),
    });
  }
  get ingredient(): FormArray {
    return this.recipesForm.get('ingredient') as FormArray;
  }
  addIngredient() {
    this.ingredient.push(
      this.fb.group({
        ingredientName: [, Validators.required],
        ingredientQuantity: [, Validators.required],
      })
    );
  }
  submitRecipe() {
    console.log(this.recipesForm.value);
  }
  cancel() {
    this.recipesForm.reset();
  }
  update() {
    this.recipeService.update(this.id, this.recipesForm.value);
    this.router.navigate(['recipe']);
  }
  getImage() {
    this.imageUrl = this.updateRecipe.imageUrl;
  }
  get checkImage() {
    if (this.imageUrl.endsWith('.jpg') || this.imageUrl.endsWith('.png')) {
      return true;
    } else {
      return false;
    }
  }
}
