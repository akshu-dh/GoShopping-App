import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public dbUrl = "http://localhost:3002";
  

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.dbUrl+'/men');
  }

  getAllWomenProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.dbUrl+'/women');
  }

  getAllKidProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.dbUrl+'/kid');
  }

  getAllLaptopProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.dbUrl+'/laptop');
  }

  getAllMobileProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.dbUrl+'/mobile');
  }

}
