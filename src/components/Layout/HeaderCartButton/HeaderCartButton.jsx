import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../store/AppProvider';
import CartContext from '../../../store/cart-context';

import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCartButton = () => {
  const [animateBtn, setAnimateBtn] = useState(false);

  const { openCartHandler } = useContext(AppContext);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = animateBtn
    ? `${classes.button} ${classes.bump}`
    : classes.button;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setAnimateBtn(true);

    const timeout = setTimeout(() => {
      setAnimateBtn(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={openCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
