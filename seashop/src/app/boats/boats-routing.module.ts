import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatsPage } from './boats.page';

const routes: Routes = [
  {
    path: '',
    component: BoatsPage
  },
  {
    path: 'boat-infos',
    loadChildren: () => import('../boat-infos/boat-infos.module').then( m => m.BoatInfosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatsPageRoutingModule {}
