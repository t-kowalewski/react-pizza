import img from '../../../assets/pizza-bg-alt.jpg';
import classes from './HeroImg.module.css';

const HeroImg = () => {
  return (
    <div className={classes['main-image']}>
      <img src={img} alt='Pizza - Hero Image' />
    </div>
  );
};

export default HeroImg;
