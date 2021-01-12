import { RecipeService } from './../../../service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}
  option = '';
  id: any;
  recipeData: any;
  ngOnInit(): void {}
  get getRecipe() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.recipeData = this.recipeService.showDetail(this.id);
    return this.recipeData;
  }
  doOption() {
    switch (this.option) {
      case 'shopping': {
        this.router.navigate(['shopping/add'], {
          queryParams: { id: this.id },
        });
        break;
      }
      case 'edit': {
        this.router.navigate(['recipe/edit'], { queryParams: { id: this.id } });
        break;
      }
      case 'delete': {
        this.recipeService.delete(this.recipeData);
        this.router.navigate(['recipe']);
        this.recipeData = '';

        break;
      }

      default:
        break;
    }
  }
}
