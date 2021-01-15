import React from 'react';
import styles from './OsImageListItem.module.css';
import PropsType from 'prop-types';

const OsImageListItem = (props) => (
  <div className={styles.wrapper}>
    <p className={styles.title}>{props.name}</p>
    <p className={styles.info}>
      <strong>Data de criação: </strong>
      <span>dd/mm/yyyy</span>
    </p>
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
