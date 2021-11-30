import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public currQty = 0;
  cart = [];
  currentPrice: number;
  address: string;
  city: string;
  code: string;
  shippingMethod: string;

  constructor(
    private storageService: StorageService,
    private payment: PaymentService
  ) {
    setTimeout(() => {
      this.loadCart();
      storageService.watchStorage().subscribe((res: string) => {
        if (res === 'added' || res === 'removed') {
          this.loadCart();
        }
      });
    }, 10);
  }

  ngOnInit() {
    this.payment.stripePaymentGateway();
  }

  loadCart = () => {
    setTimeout(() => {
      this.storageService.getAll().then(res => {
        this.cart = res;
        this.totalPrice();
      });
    }, 10);
  };

  processToPayment() {
    this.payment.checkout(this.currentPrice);
  }

  async deleteFromCart(product) {
    let addedProduct;
    await this.storageService.get(product.id).then((res) => {
      addedProduct = res;
    });
    if (addedProduct) {
      this.storageService.del(product.id);
      this.cart.forEach((item, index) => {
        if (item.product.id === product.id) {
          this.cart.splice(index, 1);
        }
      });
    }
    this.totalPrice();
  }

  async updateCart(action: string, product) {
    let updatedProduct;
    await this.storageService.get(product.id).then((res) => {
      updatedProduct = res;
    });
    if (updatedProduct) {
      updatedProduct.product = product;
      updatedProduct.qty = (action === 'add' ? updatedProduct.qty + 1 : updatedProduct.qty - 1);
      this.storageService.set(product.id, updatedProduct);
    }
    this.cart.forEach((item) => {
      if (item.product.id === product.id) {
        item.qty = updatedProduct.qty;
      }
    });
    this.totalPrice();
  }

  totalPrice(): number {
    this.currentPrice = 0;
    this.cart.map((res) => {
      const price = res.product.price * res.qty;
      this.currentPrice += price;
    });
    return this.currentPrice;
  }
}
