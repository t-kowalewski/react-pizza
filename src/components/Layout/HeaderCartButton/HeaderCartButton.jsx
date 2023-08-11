import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import CartContext from '../../../store/cart-context';

import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCartButton = () => {
  const { openCartHandler } = useContext(AppContext);
  const { totalAmount } = useContext(CartContext);

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
