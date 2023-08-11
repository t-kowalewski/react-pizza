import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  // fn to update context
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
