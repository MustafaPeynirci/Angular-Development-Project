import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageValidators } from '../image.validators';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  productForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    description: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    imageUrl: new FormControl("", [
      Validators.required,
      ImageValidators.isValidExtension
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
  updateProduct() {
    this.productForm.patchValue({
      name: "iPhone 8 Plus",
      price: "9400"
    })
  }
  get name() {
    return this.productForm.get('name')
  }
  get imageUrl() {
    return this.productForm.get('imageUrl')
  }

}
