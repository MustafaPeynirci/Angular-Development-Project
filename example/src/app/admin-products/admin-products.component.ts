import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products
  model: ProductRepository

  constructor() {
    this.model = new ProductRepository()
    this.products = this.model.getProducts()
  }

  ngOnInit(): void {
  }

}
