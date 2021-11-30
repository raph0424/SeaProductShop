import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantInfosPageRoutingModule } from './restaurant-infos-routing.module';

import { RestaurantInfosPage } from './restaurant-infos.page';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantInfosPageRoutingModule
  ],
  declarations: [RestaurantInfosPage, FooterComponent, HeaderComponent]
})
export class RestaurantInfosPageModule { }
