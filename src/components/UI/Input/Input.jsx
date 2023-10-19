import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(({ label, inputInfo }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={inputInfo.id}>{label}</label>
      <input {...inputInfo} ref={ref} />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
