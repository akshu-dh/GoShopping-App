import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  p: Product = new Product();
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.viewAllLaptopProducts();
  }

  viewAllLaptopProducts() {
    this.productService.getAllLaptopProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    },
      error => {
        console.log(error);
      })
  }

}
