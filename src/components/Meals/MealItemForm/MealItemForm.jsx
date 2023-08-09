import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const addHandler = (e) => {
    e.preventDefault();
    console.log('added');
  };

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        inputInfo={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '0',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit' onClick={addHandler}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
