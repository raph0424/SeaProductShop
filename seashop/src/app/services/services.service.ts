import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  boatsList: Boat[];

  constructor(private http: HttpClient) { }

  getJson(item: string) {
    return this.http.get(`assets/data/${item}.json`);
  }
}
