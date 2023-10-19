import { useRef, useState } from 'react';

import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inpAmountRef = useRef(null);

  const addHandler = (e) => {
    e.preventDefault();
    setAmountIsValid(true);
    console.log('added');

    const enteredAmount = +inpAmountRef.current.value;
    if (enteredAmount < 0 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={addHandler}>
      <Input
        ref={inpAmountRef}
        label='Amount'
        inputInfo={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '0',
          // max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
