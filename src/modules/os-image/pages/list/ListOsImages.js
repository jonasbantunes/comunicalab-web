import React from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import OsImageList from '../../components/OsImageList/OsImageList';
import styles from './ListOsImages.module.css';

const ListOsImages = () => {
  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Listar Imagens" subTitle="(3 itens)" />
      <div className={styles.wrapper}>
        <OsImageList />
      </div>
    </>
  );
};

export default ListOsImages;
