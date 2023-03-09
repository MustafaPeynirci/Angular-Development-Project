import { Product } from './../product.model';
import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: ProductRepository = new ProductRepository()
  product: Product = this.model.getProductById(1)
  productName: string = this.model.getProductById(1).name
  newProduct: Product = new Product()

  today: number = Date.now()
  title: string = "Angular Course"
  student: number = 525217
  price: number = 395.9916
  completed: number = 0.26

  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

  formSubmitted: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log("enter was pressed");
    }
  }
  onKeyUp2() {
    console.log("enter was pressed onKeyUp2");
  }
  onKeyUp3($event) {
    console.log($event.target.value);
  }
  onKeyUp4(x) {
    console.log(x);
  }
  addProduct(p: Product) {
    this.model.addProduct(new Product(7, "iPhone 14", "Nice telephone", "i7.png", 9390))
  }
  deleteProduct(product: Product) {
    this.model.deleteProduct(product)
  }
  updateProduct(product: Product) {
    product.name = "Updated!"
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct)
  }
  addJsonProduct(product: Product) {
    console.log("New Product: " + this.jsonProduct);
  }
  submitForm(form: NgForm) {
    console.log(form);

    this.formSubmitted = true
    if (form.valid) {
      this.addProduct(this.newProduct)
      this.newProduct = new Product()
      form.reset()
      this.formSubmitted = false
    }
  }
  getFormValidationErrors(form: NgForm): string[] {
    let messages: string[] = []
    Object.keys(form.controls).forEach(k => {
      console.log(k); //name
      console.log(form.controls[k]); //FormControl(name)
    })
    return messages
  }

}
