import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  @HostListener("focus") onFocus() {
    console.log("focus");
    this.element.nativeElement.classList.add("bg-primary")
  }
  @HostListener("blur") onBlur() {
    console.log("blur");
    this.element.nativeElement.classList.remove("bg-primary")
    let value: string = this.element.nativeElement.value
    if (!value.includes("@")) {
      this.element.nativeElement.value = value.toLowerCase() + "@gmail.com"
    }
  }

  constructor(private element: ElementRef) { }

}
