import classes from './MealItem.module.css';

import CartContext from '../../../store/cart-context';
import { useContext } from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';

const MealItem = ({ mealData }) => {
  const { id, name, description, price } = mealData;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, price, amount: amount });
  };

  return (
    <li className={classes.meal}>
      {/* Meal item info */}
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>

      {/* Meal item form */}
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
