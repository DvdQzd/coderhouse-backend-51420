class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const newProduct = new Product(product.name, product.price);
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }
}

const manager = new ProductManager();

console.log('lista inicial vacia:', manager.products)

manager.addProduct({ name: 'Jabon', price: 90 })

console.log('lista con 1 producto:', manager.products)

manager.addProduct({ name: 'Queso', price: 70 })

console.log('lista con 2 productos:', manager.products)

const manager2 = new ProductManager();

console.log('lista inicial vacia manager 2:', manager2.products)

console.log('lista del manager 1 se mantiene:', manager.products)
