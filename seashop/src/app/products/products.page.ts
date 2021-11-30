import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ProductInterface } from '../models/products.model';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  category: {
    idCat: number;
    sale: boolean;
  };
  products: ProductInterface[];
  currQty = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private storage: StorageService,
    private toastController: ToastController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.category =
          this.router.getCurrentNavigation().extras.state.category;
        this.loadData();
      }
    });
  }

  ngOnInit() {
    this.loadData();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'An error happend while fetching the API',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  loadData = () => {
    this.apiService.getProducts()
      .subscribe((res: ProductInterface[]) => {
        this.products = [];
        res.forEach(prod => {
          prod.qty = 0;
          if (prod.category === undefined) { return; }
          if (prod.category === this.category.idCat) {
            this.products.push(prod);
          } else if (this.category.sale && prod.discount !== 0) {
            this.products.push(prod);
          } else if (this.category.idCat === 1000) {
            this.products.push(prod);
          }
        });
      },
        err => {
          this.presentToast();
        });
  };

  addProductQty = (prod: ProductInterface) => prod.qty ? prod.qty += 1 : prod.qty = 1;
  removeProductQty = (prod: ProductInterface) => prod.qty && prod.qty > 0 ? prod.qty -= 1 : prod.qty = 0;

  async addToCart(product, currQty) {
    if (product.qty) {
      delete product.qty;
    }
    let addedProduct;
    await this.storage.get(product.id).then(res => {
      addedProduct = res;
    });
    if (addedProduct) {
      addedProduct.product = product;
      addedProduct.qty += currQty;
      this.storage.set(product.id, addedProduct);
    } else {
      this.storage.set(product.id, { product, qty: currQty });
    }
    product.qty = 0;
  }
}
