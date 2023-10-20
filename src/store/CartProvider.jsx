// component for managing CartContext data and provide it to component which may need it

import { useReducer } from 'react';
import CartContext from './cart-context';

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const existingItemInd = state.items.findIndex(
      (item) => item.name === action.payload.name
    );
    const existingCartItem = state.items[existingItemInd];

    let updItems;

    if (existingCartItem) {
      const updItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updItems = [...state.items];
      updItems[existingItemInd] = updItem;
    } else {
      updItems = [...state.items, action.payload];
    }

    const updTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    return {
      ...state,
      items: updItems,
      totalAmount: updTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatchCartContext({ type: 'ADD_TO_CART', payload: item });
  }; //pass item

  const remItemFromCartHandler = (id) => {
    dispatchCartContext({ type: 'REMOVE_FROM_CART', payload: id });
  }; //pass id

  const [cartContext, dispatchCartContext] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: remItemFromCartHandler,
  });
  // console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
