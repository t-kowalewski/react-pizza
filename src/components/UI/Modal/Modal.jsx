import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { AppContext } from '../../../App';

import classes from './Modal.module.css';
import Card from '../Card/Card';

const Modal = (props) => {
  const { closeCartHandler } = useContext(AppContext);

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={closeCartHandler}></div>
      <Card className={classes.modal}>{props.children}</Card>
    </>,
    document.getElementById('overlay-modal')
  );
};

export default Modal;
