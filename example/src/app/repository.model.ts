import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';
export class ProductRepository {
    private dataSource: SimpleDataSource
    private products: Product[]

    constructor() {
        this.dataSource = new SimpleDataSource()
        this.products = new Array<Product>()
        this.dataSource.getProducts().forEach(x => this.products.push(x))
    }
    getProducts(): Product[] {
        return this.products
    }
    getProductById(id: number): Product {
        return this.products.find(x => x.id == id)
    }
    getProductCount(): number {
        return this.products.length
    }
    addProduct(product: Product) {
        this.products.push(product)
    }
    deleteProduct(product: Product) {
        let index = this.products.indexOf(product)
        this.products.splice(index, 1)
    }
}