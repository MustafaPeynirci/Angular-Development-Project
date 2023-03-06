import { Product } from './../product.model';
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
  selectProduct: Product
  selectedProduct

  constructor() {
    this.model = new ProductRepository()
    this.products = this.model.getProducts()
  }

  ngOnInit(): void {
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct
  }
  getSelect(product: Product): boolean {
    return product == this.selectProduct
  }
  editProduct(product: Product) {
    this.selectProduct = product
  }
  saveChanges() {
    const p = this.model.getProductById(this.selectProduct.id)
    p.name = this.selectProduct.name
    p.price = this.selectProduct.price
    p.imageUrl = this.selectProduct.imageUrl
    p.description = this.selectProduct.description
    this.selectProduct = null
  }

}
