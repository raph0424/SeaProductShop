import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public currQty = 0;
  @Input() product: any;
  constructor(public modalCtrl: ModalController, private storageService: StorageService) { }

  ngOnInit() {
    console.log(this.product);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  async addToCart(product, currQty) {
    let addedProduct;
    await this.storageService.get(product.id).then(res => {
      addedProduct = res;
    });
    if (addedProduct) {
      addedProduct.product = product;
      addedProduct.qty += currQty;
      this.storageService.set(product.id, addedProduct);
    } else {
      this.storageService.set(product.id, { product, qty: currQty });
    }
  }

  setQty(action: string) {
    action === 'add' ? this.currQty++ : this.currQty--;
    console.log(this.currQty);
  }
}
