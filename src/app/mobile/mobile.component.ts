import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  p: Product = new Product();
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.viewAllMobileProducts();
  }

  viewAllMobileProducts() {
    this.productService.getAllMobileProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    },
      error => {
        console.log(error);
      })
  }

}
