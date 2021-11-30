import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'home',
    data: {
      name: 'Accueil'
    },
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'boat-infos',
    loadChildren: () => import('./boat-infos/boat-infos.module').then(m => m.BoatInfosPageModule)
  },
  {
    path: 'restaurant-infos',
    loadChildren: () => import('./restaurant-infos/restaurant-infos.module').then(m => m.RestaurantInfosPageModule)
  },
  {
    path: 'recipe-infos',
    loadChildren: () => import('./recipe-infos/recipe-infos.module').then(m => m.RecipeInfosPageModule)
  },
  {
    path: 'recipes',
    data: {
      name: 'Recettes'
    },
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesPageModule),
  },
  {
    path: 'restaurants',
    data: {
      name: 'Restaurant'
    },
    loadChildren: () =>
      import('./restaurants/restaurants.module').then(
        (m) => m.RestaurantsPageModule
      ),
  },
  {
    path: 'boats',
    data: {
      name: 'Bateaux'
    },
    loadChildren: () =>
      import('./boats/boats.module').then((m) => m.BoatsPageModule),
  },
  {
    path: 'about',
    data: {
      name: 'A Propos'
    },
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
