import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Cart = () => {
  // const cartItems = props.cartItems.map((cartItem) => {
  //   return <CartItem />;
  // });

  const { closeCartHandler } = useContext(AppContext);

  const cartItems = [{ id: 'c1', name: 'pizza', price: 10.0, amount: 2 }].map(
    (cartItem) => {
      return <li key={cartItem.id}>{cartItem.name}</li>;
    }
  );

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>29</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
        {/* Order rendered only when we have items in the cart */}
      </div>
    </Modal>
  );
};

export default Cart;
