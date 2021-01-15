import React from 'react';
import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import OsImageList from '../components/OsImageList/OsImageList';

const ListOsImages = () => {
  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Listar Imagens" subTitle="(3 itens)" />
      <div>
        <OsImageList />
      </div>
    </>
  );
};

export default ListOsImages;
