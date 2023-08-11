// component for managing CartContext data and provide it to component which may need it

import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = () => {}; //pass item
  const remItemFromCartHandler = () => {}; //pass id

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: remItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
