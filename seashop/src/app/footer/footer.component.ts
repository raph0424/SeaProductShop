import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  selectedPage: string;
  cartProductsCount: number;
  productValue: string;

  constructor(private router: Router, private storage: StorageService) {
    setTimeout(() => {
      this.loadCart();
      this.getCartItems();
    }, 10);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          const tmp = this.router.url.split('/')[1];
          this.productValue = tmp === 'categories' ? 'categories' : 'products';
          setTimeout(() => {
            this.selectedPage = tmp;
          }, 1);
        }, 1);

      }
    });
  }

  async loadCart() {
    this.storage.watchStorage().subscribe(async (res: string) => {
      if (res === 'added' || res === 'removed') {
        this.getCartItems();
      }
    });
  }

  async getCartItems() {
    setTimeout(() => {
      this.storage.getAll().then((res: any[]) => {
        this.cartProductsCount = res.length;
      });
    }, 100);
  }
}
