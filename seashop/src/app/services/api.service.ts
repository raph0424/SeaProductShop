import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../models/products.model';


const httpOptions = {
  headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Accept: '*/*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products: [] = [];
  private apiBaseUrl = 'http://bateauthibault.studiopixidream.com';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiBaseUrl}/products/`, httpOptions);
  }

  parseProduct(idCat: number) {
    return new Promise(resolve => {
      this.getProducts()
        .subscribe((data: ProductInterface[]) => {
          resolve(data);
        },
          (error: any) => {
            console.log(error);
          });
    });
  }

  getBoats = () => this.http.get(`${this.apiBaseUrl}/boats/`, httpOptions);

  getRestaurants = () => this.http.get(`${this.apiBaseUrl}/restaurants/`, httpOptions);

  getRecipes = () => this.http.get(`${this.apiBaseUrl}/recipes/`, httpOptions);
}
