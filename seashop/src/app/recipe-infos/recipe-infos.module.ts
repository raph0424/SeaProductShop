import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeInfosPageRoutingModule } from './recipe-infos-routing.module';

import { RecipeInfosPage } from './recipe-infos.page';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeInfosPageRoutingModule
  ],
  declarations: [RecipeInfosPage, FooterComponent, HeaderComponent]
})
export class RecipeInfosPageModule { }
