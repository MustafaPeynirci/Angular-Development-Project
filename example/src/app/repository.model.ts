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
    getProductsById(id: number): Product {
        return this.products.find(x => x.id == id)
    }
}