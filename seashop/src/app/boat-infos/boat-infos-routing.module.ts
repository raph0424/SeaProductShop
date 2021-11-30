import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatInfosPage } from './boat-infos.page';

const routes: Routes = [
  {
    path: '',
    component: BoatInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatInfosPageRoutingModule {}
