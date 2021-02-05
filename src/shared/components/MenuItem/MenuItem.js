import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = (props) => <p className={styles.menuItem}>{props.children}</p>;

export default MenuItem;
