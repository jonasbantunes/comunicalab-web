import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuDropdownLink.module.css';

const MenuDropdownLink = (props) => (
  <Link className={styles.button} type="button" {...props}>
    {props.children}
  </Link>
);

export default MenuDropdownLink;
