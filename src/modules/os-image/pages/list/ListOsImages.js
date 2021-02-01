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
  console.log(osImageStore);

  useEffect(() => {
    osImageStore.fetchAll();
  }, [osImageStore]);

  let toolbarSubtitle;
  if (osImageStore.osImages.length === 1) {
    toolbarSubtitle = `(1 item)`;
  } else if (osImageStore.osImages.length > 1) {
    toolbarSubtitle = `(${osImageStore.osImages.length} itens)`;
  } else {
    toolbarSubtitle = undefined;
  }

  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Listar Imagens" subTitle={toolbarSubtitle} />
      <div className={styles.wrapper}>
        <OsImageList osImages={osImageStore.osImages} />
      </div>
    </>
  );
});

export default ListOsImages;
