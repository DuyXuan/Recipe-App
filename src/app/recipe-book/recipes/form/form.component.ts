import { RecipeService } from './../../../service/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  imageUrl = '';
  recipesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.recipesForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
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
    this.router.navigate(['recipe']);
  }
  save() {
    this.recipeService.addRecipe(this.recipesForm.value);
    this.router.navigate(['recipe']);
  }
  get checkImage() {
    if (this.imageUrl.endsWith('.jpg') || this.imageUrl.endsWith('.png')) {
      return true;
    } else {
      return false;
    }
  }

  remove(index) {
    this.ingredient.removeAt(index);
  }
}
