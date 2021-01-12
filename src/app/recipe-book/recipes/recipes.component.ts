import { RecipeService } from './../../service/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  myData: any;
  recipeList = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeList = this.recipeService.recipeList;
  }
  showForm() {
    this.router.navigate(['recipeForm'], { relativeTo: this.route });
  }

  showDetail(id: any) {
    this.router.navigate(['detail'], {
      relativeTo: this.route,
      queryParams: {
        id: id,
      },
    });
  }
  showMessage() {
    if (this.router.url == '/recipe') {
      return true;
    } else {
      return false;
    }
  }
}
