import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to our pizza ordering site!</h2>

      <p>
        We offer a wide variety of delicious pizzas, made with fresh ingredients
        and baked to perfection. Whether you’re a fan of classic Margherita,
        love a meaty feast, or prefer a veggie delight, we’ve got something for
        everyone.
      </p>
      <p>
        Ordering is simple and quick. Just choose your favorite pizza, select
        amount, and proceed to checkout. Your hot and tasty pizza will be on its
        way to you in no time!
      </p>
    </section>
  );
};

export default MealsSummary;
