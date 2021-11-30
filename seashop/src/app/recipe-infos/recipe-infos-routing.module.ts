import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeInfosPage } from './recipe-infos.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeInfosPageRoutingModule {}
