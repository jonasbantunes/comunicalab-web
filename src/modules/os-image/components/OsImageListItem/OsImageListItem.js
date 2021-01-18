import React from 'react';
import styles from './OsImageListItem.module.css';
import PropsType from 'prop-types';

const OsImageListItem = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.infoWrapper}>
      <p className={styles.title}>{props.name}</p>
      <p className={styles.info}>
        <strong>Data de criação: </strong>
        <span>dd/mm/yyyy</span>
      </p>
    </div>
    <div className={styles.options}>
      <button className={styles.optionsBtn}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </button>
    </div>
  </div>
);

OsImageListItem.propsType = {
  name: PropsType.string,
  builtAt: PropsType.object,
};

OsImageListItem.defaultProps = {
  name: '',
  builtAt: null,
};

export default OsImageListItem;
