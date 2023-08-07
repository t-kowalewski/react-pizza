import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>React Pizza</h2>
      <button>Cart</button>
    </header>
  );
};

export default Header;
