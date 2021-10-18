import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase User", (t) => {
  //instanciar
  const nuevoUsuario = new User("Leandro");
  t.is(nuevoUsuario.name, "Leandro");
  const nuevoProducto = new Product("CocaCola", 100);
  nuevoUsuario.addProduct(nuevoProducto); // 1
  nuevoUsuario.addProduct(nuevoProducto); //2

  t.is(nuevoUsuario.products.length, 2);
  t.is(nuevoUsuario.products[0].name, "CocaCola"); //1
  t.is(nuevoUsuario.products[0].price, 100); //2
});
test("Testeo la clase Product y sus métodos", (t) => {
  const nuevoProducto = new Product("Collar", 1000);
  t.is(nuevoProducto.name, "Collar");
  t.is(nuevoProducto.price, 1000);
});
