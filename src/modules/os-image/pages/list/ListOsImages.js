import React, { useContext, useEffect } from 'react';
import { RootStoreContext } from '../../../../data/store/root-store';
import OsImageList from '../../components/OsImageList/OsImageList';
import styles from './ListOsImages.module.css';
import { observer } from 'mobx-react-lite';
import Toolbar from '../../../../shared/components/Toolbar/Toolbar';
import Menu from '../../../../shared/components/Menu/Menu';
import Title from '../../../../shared/components/Title/Title';

const ListOsImages = observer(() => {
  const { osImageStore } = useContext(RootStoreContext);
  const osImages = osImageStore.osImages;

  useEffect(() => {
    osImageStore.fetchAll();
  }, [osImageStore]);

  let toolbarSubtitle;
  if (osImages.length === 1) {
    toolbarSubtitle = `(1 item)`;
  } else if (osImages.length > 1) {
    toolbarSubtitle = `(${osImages.length} itens)`;
  } else {
    toolbarSubtitle = undefined;
  }

  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Listar Imagens" subTitle={toolbarSubtitle} />
      <div className={styles.wrapper}>
        <OsImageList osImages={osImages} />
      </div>
    </>
  );
});

export default ListOsImages;
