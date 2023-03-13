import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  productForm = new FormGroup({
    name: new FormControl("iPhone 7 Plus"),
    description: new FormControl("Nice"),
    price: new FormControl("8350"),
    imageUrl: new FormControl("1.png")
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

}
