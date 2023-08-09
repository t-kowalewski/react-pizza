import classes from './Input.module.css';

const Input = ({ label, inputInfo }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={inputInfo.id}>{label}</label>
      <input {...inputInfo} />
    </div>
  );
};

export default Input;
