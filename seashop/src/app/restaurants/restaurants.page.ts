import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Restaurant } from '../models/restaurant';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  item = 'restaurants';
  title = 'Restaurants partenaires';
  subTitle = 'Tous les restaurants partenaires avec le bateau de Thibault.';
  restaurantsList: Restaurant[];

  constructor(private router: Router, private api: ApiService, private toastController: ToastController) { }

  ngOnInit() {
    this.api.getRestaurants().subscribe((res: Restaurant[]) => {
      this.restaurantsList = res;
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

  onLoadRestaurant(restaurant: Restaurant) {
    const navigationExtras: NavigationExtras = {
      state: {
        restaurant
      }
    };
    this.router.navigate(['/restaurant-infos'], navigationExtras);
  }
}
