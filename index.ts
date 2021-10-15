class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class User {
  name: string;
  products: Product[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
}

export { User, Product };
