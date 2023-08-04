import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  p: Product = new Product();
  products!: Product[];
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.viewAllProducts();
  }

  viewAllProducts() {
    this.productService.getAllWomenProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    },
      error => {
        console.log(error);
      })
  }

}
