import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = [
    {
      name: 'Poissons',
      id: 0,
      picture: '../../assets/img/fish.jpg',
    },
    {
      name: 'Coquillages',
      id: 1,
      picture: '../../assets/img/seashell.jpeg',
    },
    {
      name: 'Crustacés',
      id: 2,
      picture: '../../assets/img/crustace.jpg',
    },
    {
      name: 'Promotion',
      sale: true,
      picture: '../../assets/img/sales.jpg',
    },
    {
      name: 'Tous les produits',
      id: 1000,
      picture: '../../assets/img/recipes.jpg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadProduct(category: { idCat?: number; sale?: boolean }) {
    const navigationExtras: NavigationExtras = {
      state: {
        category
      }
    };
    this.router.navigate(['/products'], navigationExtras);
  }
}
