import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
