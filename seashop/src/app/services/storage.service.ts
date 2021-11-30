import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;
  private storageSub = new Subject<string>();

  constructor(private ionStorage: Storage, private toastController: ToastController) {
    this.init();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  async init() {
    const storage = await this.ionStorage.create();
    this.storage = storage;
  }

  public set(key: string, value: any) {
    this.storage?.set(key, value);
    this.storageSub.next('added');
    this.presentToast('Panier mis a jour', 'success');
  }

  public get(key: string) {
    return this.storage?.get(key);
  }

  public async getAll() {
    let keys: string[];
    const items = [];

    await this.storage.keys().then(res => {
      keys = res;
    });

    for (const key of keys) {
      const item = await this.get(key).then(res => res);
      items.push(item);
    }

    return items;
  }

  public del(key: string) {
    this.storage.remove(key);
    this.storageSub.next('removed');
    this.presentToast('Item supprimé !', 'warning');
  }
}
