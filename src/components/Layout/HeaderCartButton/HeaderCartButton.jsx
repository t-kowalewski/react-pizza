import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../store/AppProvider';
import CartContext from '../../../store/cart-context';

import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCartButton = () => {
  const { openCartHandler } = useContext(AppContext);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
