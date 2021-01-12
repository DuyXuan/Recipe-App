import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-update-delete-group-btn',
  templateUrl: './update-delete-group-btn.component.html',
  styleUrls: ['./update-delete-group-btn.component.css'],
})
export class UpdateDeleteGroupBtnComponent implements OnInit {
  id;
  name;
  amount;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.id = this.route.snapshot.queryParamMap.get('id');
  }

  ngOnInit(): void {}

  update() {
    this.name = this.route.snapshot.queryParamMap.get('name');
    let newAmount = this.route.snapshot.queryParamMap.get('itemAmount');
    if (newAmount != null) {
      this.recipeService.updateIngredientList(this.id, newAmount, this.name);
    }
  }
  delete() {
    let newItem = {
      ingredientName: this.name,
      ingredientQuantity: Number(this.amount),
    };
    this.recipeService.deleteIngredient(this.id, newItem);
  }
}
