import { createContext } from 'react';

const CartContext = createContext({
  items: [], // [{id: 'p1', name: "Burger", amount: 1, price: 5}]
  totalAmount: 0, // how much
  // fn to update context
  // addItem: (item) => {},
  // removeItem: (id) => {},
});

export default CartContext;
