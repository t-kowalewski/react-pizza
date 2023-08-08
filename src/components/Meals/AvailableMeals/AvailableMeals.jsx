import classes from './AvailableMeals.module.css';

import mealsData from '../dummy-meals';

const AvailableMeals = () => {
  const mealsList = mealsData.map((meal) => {
    const { id, name, description, price } = meal;

    return <li key={id}>{name}</li>;
  });

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
