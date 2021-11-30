import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantInfosPage } from './restaurant-infos.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantInfosPageRoutingModule {}
