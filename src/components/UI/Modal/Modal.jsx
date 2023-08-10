import { createPortal } from 'react-dom';

import classes from './Modal.module.css';
import Card from '../Card/Card';

const Modal = (props) => {
  return createPortal(
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>{props.children}</Card>
    </>,
    document.getElementById('overlay-modal')
  );
};

export default Modal;
