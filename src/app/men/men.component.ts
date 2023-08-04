import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  p: Product = new Product();
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.viewAllProducts();
  }

  viewAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    },
      error => {
        console.log(error);
      })
  }

}
