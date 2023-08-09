import classes from './MealItem.module.css';

const MealItem = ({ mealData }) => {
  const { name, description, price } = mealData;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>

      <div></div>
    </li>
  );
};

export default MealItem;
