import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/services.service';
import { Recipe } from '../models/recipe';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  item = 'recipes';
  title = 'Nos recettes';
  subTitle = 'Toutes les recettes du bateau de Thibault';
  recipesList: Recipe[];

  constructor(private router: Router, private api: ApiService, private toastController: ToastController) { }

  ngOnInit() {
    this.api.getRecipes().subscribe((res: Recipe[]) => {
      this.recipesList = res;
    },
      err => {
        this.presentToast();
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'An error happend while fetching the API',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  onLoadRecipe(recipe: Recipe) {
    const navigationExtras: NavigationExtras = {
      state: {
        recipe
      }
    };
    this.router.navigate(['/recipe-infos'], navigationExtras);
  }
}
