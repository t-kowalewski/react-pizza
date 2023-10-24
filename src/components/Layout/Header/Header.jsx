import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>React Pizza 🍕</h2>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
