import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //Page name
  currentItem = 'home';

  iconColor = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  //Redirect
  toRestaurants() {
    this.router.navigate(['/restaurants']);
  }
  toaAbout() {
    this.router.navigate(['/about']);
  }
  toRecipes() {
    this.router.navigate(['/recipes']);
  }
  toBoats() {
    this.router.navigate(['/boats']);
  }
  toCategories() {
    this.router.navigate(['/categories']);
  }
  toFacebook() {
    window.open('https://facebook.com/lebateaudethibault', '_blank');
  }
}
