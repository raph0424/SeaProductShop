import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatInfosPageRoutingModule } from './boat-infos-routing.module';

import { BoatInfosPage } from './boat-infos.page';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatInfosPageRoutingModule
  ],
  declarations: [BoatInfosPage, FooterComponent, HeaderComponent]
})
export class BoatInfosPageModule { }
