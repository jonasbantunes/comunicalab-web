import React, { useContext, useEffect } from 'react';
import { RootStoreContext } from '../../../../data/store/root-store';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import OsImageList from '../../components/OsImageList/OsImageList';
import styles from './ListOsImages.module.css';
import { observer } from 'mobx-react-lite';

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
