import { Product } from './product.model';
export class SimpleDataSource {
    private products: Product[]

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "iPhone 7 Plus", "Nice telephone", "i7.jpg", 5390),
            new Product(2, "iPhone 8 Plus", "Nice telephone", "i8.jpg", 6140),
            new Product(3, "iPhone X", "Nice telephone", "iX.jpg", 8750),
            new Product(4, "iPhone 11", "Nice telephone", "i11.jpg", 15090),
            new Product(5, "iPhone 12", "Nice telephone", "i12.jpg", 23990),
            new Product(6, "iPhone 13", "Nice telephone", "i13.jpg", 26999)
        )
    }
    getProducts(): Product[] {
        return this.products
    }
    getProductsById(id: number): Product {
        return this.products.find(x => x.id == id)
    }
}