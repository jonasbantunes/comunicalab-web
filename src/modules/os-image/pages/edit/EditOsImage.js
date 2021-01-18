import React, { useState } from 'react';
import Menu from '../../../../utils/components/Menu';
import Title from '../../../../utils/components/Title';
import Toolbar from '../../../../utils/components/Toolbar';
import OsImageForm from '../../components/OsImageForm/OsImageForm';
import styles from './EditOsImage.module.css';
import dayjs from 'dayjs';
import { Redirect } from 'react-router';

const EditOsImage = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const osImage = {
    name: 'Linux',
    builtAt: new Date(),
  };

  const initialValues = {
    name: osImage.name,
    builtAt: dayjs(osImage.builtAt).format('DD/MM/YYYY'),
  };

  const cancelHandler = () => setShouldRedirect(true);
  const submitHandler = (values) => {
    console.log('VALUES: ', values);
  };

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  }

  return (
    <>
      <Toolbar />
      <Menu />
      <Title title="Cadastrar Imagem" />
      <div className={styles.wrapper}>
        <OsImageForm
          initialValues={initialValues}
          onSubmit={submitHandler}
          onCancel={cancelHandler}
          submitLabel="Atualizar"
        />
      </div>
    </>
  );
};

export default EditOsImage;
