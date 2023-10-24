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

  if (action.type === 'REMOVE_FROM_CART') {
    const remItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const updItem = {
      ...state.items[remItemIndex],
      amount: state.items[remItemIndex].amount - 1,
    };

    const updItems = [...state.items];

    if (updItem.amount === 0) {
      updItems.splice(remItemIndex, 1);
    } else {
      updItems[remItemIndex] = updItem;
    }

    const updTotalAmount = state.totalAmount - updItem.price;

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
