import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-infos',
  templateUrl: './recipe-infos.page.html',
  styleUrls: ['./recipe-infos.page.scss'],
})
export class RecipeInfosPage implements OnInit {
  recipeName: string;
  recipe: Recipe;
  backgroundImg: SafeStyle;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData = async () => {
    await this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.recipe =
          this.router.getCurrentNavigation().extras.state.recipe;
        this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(`url(${this.recipe.picture})`);
      }
    });
  };
}
