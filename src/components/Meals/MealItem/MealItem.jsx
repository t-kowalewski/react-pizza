import classes from './MealItem.module.css';

import MealItemForm from '../MealItemForm/MealItemForm';

const MealItem = ({ mealData }) => {
  const { id, name, description, price } = mealData;

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
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
