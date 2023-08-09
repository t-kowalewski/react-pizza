import classes from './AvailableMeals.module.css';

import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import mealsData from '../dummy-meals';

const AvailableMeals = () => {
  const mealsList = mealsData.map((meal) => {
    return <MealItem key={meal.id} mealData={meal} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
