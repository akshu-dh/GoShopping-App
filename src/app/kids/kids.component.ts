import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  p: Product = new Product();
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.viewAllKidProducts();
  }

  viewAllKidProducts() {
    this.productService.getAllKidProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    },
      error => {
        console.log(error);
      })
  }

}
