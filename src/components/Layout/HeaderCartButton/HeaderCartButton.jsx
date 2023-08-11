import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../App';

import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCartButton = () => {
  const { openCartHandler } = useContext(AppContext);

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;
