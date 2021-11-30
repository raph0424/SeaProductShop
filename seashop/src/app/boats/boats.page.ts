import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ApiService } from '../services/api.service';

import { Boat } from '../models/boat';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
})
export class BoatsPage implements OnInit {

  item = 'boats';
  title = 'Nos bateaux partenaires';
  subTitle = 'Tous les eaux mènent à Thibault.';

  boatsList: Boat[];

  constructor(private router: Router, private api: ApiService, private toastController: ToastController) { }

  ngOnInit() {
    this.api.getBoats().subscribe(
      (res: Boat[]) => {
        this.boatsList = res;
      },
      err => this.presentToast());
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'An error happend while fetching the API',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  onLoadBoat(boat: Boat) {
    const navigationExtras: NavigationExtras = {
      state: {
        boat
      }
    };
    this.router.navigate(['/boat-infos'], navigationExtras);
  }

  toAbout() {
    this.router.navigate(['/about']);
  }
}
