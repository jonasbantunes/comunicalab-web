import React from 'react';
import OsImageListItem from '../OsImageListItem/OsImageListItem';
import styles from './OsImageList.module.css';

const OsImageList = () => {
  return (
    <div className={styles.wrapper}>
      <OsImageListItem name="Nome da Imagem" />
      <OsImageListItem />
    </div>
  );
};

export default OsImageList;
