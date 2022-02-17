/*
Módulos de alto nível não devem depender de módulos de baixo nível.
Amobs devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
//import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
//const messaging = new Messaging();
const persistency = new Persistency();
/*const individualCustomer = new IndividualCustomer(
  'Matheus',
  'Konrad',
  '123.456.789-77',
);*/
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresona',
  '123.456.789-77',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
