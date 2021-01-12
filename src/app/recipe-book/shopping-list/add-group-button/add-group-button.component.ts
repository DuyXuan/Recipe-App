import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-add-group-button',
  templateUrl: './add-group-button.component.html',
  styleUrls: ['./add-group-button.component.css'],
})
export class AddGroupButtonComponent implements OnInit {
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
  }
  add() {
    let name = this.route.snapshot.queryParamMap.get('name');
    let amount = this.route.snapshot.queryParamMap.get('itemAmount');
    if (name != null && amount != null) {
      this.recipeService.addIngredient(this.id, {
        ingredientName: name,
        ingredientQuantity: amount,
      });
    }
  }
}
