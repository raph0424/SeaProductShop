import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-infos',
  templateUrl: './restaurant-infos.page.html',
  styleUrls: ['./restaurant-infos.page.scss'],
})
export class RestaurantInfosPage implements OnInit {
  restaurantName: string;
  restaurant: Restaurant;
  backgroundImg: SafeStyle;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData = async () => {
    await this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.restaurant =
          this.router.getCurrentNavigation().extras.state.restaurant;
        this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(`url(${this.restaurant.picture})`);
      }
    });
  };

}
