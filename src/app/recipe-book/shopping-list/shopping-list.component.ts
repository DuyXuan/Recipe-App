import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredientList: any;
  id: any;
  itemList = [];
  itemName = '';
  itemAmount = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    if (this.router.url != '/shopping') {
      this.ingredientList = this.recipeService.showDetail(this.id).ingredient;
    }
  }
  fillCurrent(name, amount) {
    this.itemName = name;
    this.itemAmount = amount;
    this.router.navigate(['custom'], {
      relativeTo: this.route,
      queryParams: {
        id: this.id,
        name: name,
        amount: amount,
      },
    });
  }

  sendAmount() {
    if (!this.router.url.startsWith('/shopping/add')) {
      this.router.navigate(['custom'], {
        relativeTo: this.route,
        queryParams: {
          itemAmount: this.itemAmount,
          name: this.itemName,
        },
      });
    }
  }
  sendDataToAdd() {
    if (this.router.url.startsWith('/shopping/add')) {
      this.router.navigate(['add'], {
        relativeTo: this.route,
        queryParams: {
          id: this.id,
          itemAmount: this.itemAmount,
          name: this.itemName,
        },
      });
      console.log('OK');
    }
  }
  clear() {
    if (this.router.url.startsWith('/shopping/add')) {
      this.itemName = '';
      this.itemAmount = '';
    } else {
      this.itemAmount = '';
    }
  }
  check() {
    if (this.router.url == '/shopping') {
      return true;
    } else {
      return false;
    }
  }
  disableNameField() {
    if (this.router.url.startsWith('/shopping/custom')) {
      return true;
    } else {
      return false;
    }
  }
}
