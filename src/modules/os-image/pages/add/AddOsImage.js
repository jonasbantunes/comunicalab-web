import React, { useContext, useState } from 'react';
import styles from './AddOsImage.module.css';
import OsImageForm from '../../components/OsImageForm/OsImageForm';
import { Redirect } from 'react-router-dom';
import dayjs from 'dayjs';
import { RootStoreContext } from '../../../../data/store/root-store';
import Toolbar from '../../../../shared/components/Toolbar/Toolbar';
import Menu from '../../../../shared/components/Menu/Menu';
import Title from '../../../../shared/components/Title/Title';

const ListOsImages = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { osImageStore } = useContext(RootStoreContext);

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  } else {
    const cancelHandler = () => setShouldRedirect(true);
    const submitHandler = async (values) => {
      const parsedDate = dayjs(
        values.builtAt,
        ['D/M/YYYY', 'DD/M/YYYY', 'D/MM/YYYY', 'DD/MM/YYYY'],
        true
      );
      const newOsImage = {
        name: values.name,
        builtAt: parsedDate.toJSON(),
      };
      await osImageStore.createOne(newOsImage);
      setShouldRedirect(true);
    };

    return (
      <>
        <Toolbar />
        <Menu />
        <Title title="Cadastrar Imagem" />
        <div className={styles.wrapper}>
          <OsImageForm onSubmit={submitHandler} onCancel={cancelHandler} />
        </div>
      </>
    );
  }
};

export default ListOsImages;
