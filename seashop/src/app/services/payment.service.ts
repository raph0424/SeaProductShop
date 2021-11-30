import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  strikeCheckout: any = null;

  constructor(private toastController: ToastController, private storage: StorageService, private router: Router) {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Payement realisé avec succès',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  cleanCart = () => {
    this.storage.getAll().then((res) => {
      res.forEach(item => {
        this.storage.del(item.product.id);
      });
    });
  };

  checkout(amount) {
    const strikeCheckout = (window as any).StripeCheckout.configure({
      key: 'pk_test_51Jzg6oA9SxFLO63Qq7sVstMFmLNPcqAB9AyhjDgdfQYdGY9nrEJra5YF1xhp2GxcMoFj3yfJmOYyMceHjtOxvflE00gjk0pJQn',
      locale: 'auto',
      token: (stripeToken: any) => {
        this.presentToast();
        this.router.navigate(['/home']);
        setTimeout(() => {
          this.cleanCart();
        }, 2000);
      }
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement('script');
      scr.id = 'stripe-script';
      scr.type = 'text/javascript';
      scr.src = 'https://checkout.stripe.com/checkout.js';

      scr.onload = () => {
        this.strikeCheckout = (window as any).StripeCheckout.configure({
          key: 'pk_test_51Jzg6oA9SxFLO63Qq7sVstMFmLNPcqAB9AyhjDgdfQYdGY9nrEJra5YF1xhp2GxcMoFj3yfJmOYyMceHjtOxvflE00gjk0pJQn',
          locale: 'auto',
          token: (token: any) => {
            this.presentToast();
            this.router.navigate(['/home']);
            setTimeout(() => {
              this.cleanCart();
            }, 2000);
          }
        });
      };
      window.document.body.appendChild(scr);
    }
  }
}
