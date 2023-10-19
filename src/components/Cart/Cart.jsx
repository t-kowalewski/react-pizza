import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import { AppContext } from '../../store/AppProvider';

const Cart = () => {
  const { closeCartHandler } = useContext(AppContext);
  const cartCtx = useContext(CartContext);
  const { addItem, removeItem } = cartCtx;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = cartCtx.items.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.id}
        {...cartItem}
        onAdd={addItem}
        onRemove={removeItem}
      />
    );
  });

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeCartHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
