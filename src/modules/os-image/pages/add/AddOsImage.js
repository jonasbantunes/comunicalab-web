import React, { useState } from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import styles from './AddOsImage.module.css';

import OsImageForm from '../../components/OsImageForm/OsImageForm';
import { Redirect } from 'react-router-dom';

const ListOsImages = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const cancelHandler = () => setShouldRedirect(true);
  const submitHandler = (value) => console.log(value);

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  }

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
};

export default ListOsImages;
