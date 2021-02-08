import clsx from 'clsx';
import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={clsx(styles.card, className)} {...otherProps}>
      {props.children}
    </div>
  );
};

export default Card;
