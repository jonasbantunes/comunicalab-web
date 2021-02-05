import React, { useContext, useEffect, useState } from 'react';
import OsImageForm from '../../components/OsImageForm/OsImageForm';
import styles from './EditOsImage.module.css';
import dayjs from 'dayjs';
import { Redirect, useParams } from 'react-router';
import { RootStoreContext } from '../../../../data/store/root-store';
import { observer } from 'mobx-react-lite';
import Menu from '../../../../shared/components/Menu/Menu';
import Title from '../../../../shared/components/Title/Title';
import Toolbar from '../../../../shared/components/Toolbar/Toolbar';

const EditOsImage = observer(() => {
  const { id: imageId } = useParams();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { osImageStore } = useContext(RootStoreContext);
  const osImage = osImageStore.selectOsImage(imageId);

  useEffect(() => {
    if (osImage == null) {
      osImageStore.fetchOne(imageId);
    }
  }, [imageId, osImage, osImageStore]);

  if (shouldRedirect) {
    return <Redirect to="/Imagens/Listar" />;
  } else if (osImage == null) {
    return (
      <>
        <Toolbar />
        <Menu />
        <Title title="Editar Imagem" />
      </>
    );
  } else {
    const initialValues = {
      name: osImage.name,
      builtAt: dayjs(osImage.builtAt).format('D/M/YYYY'),
    };

    const cancelHandler = () => setShouldRedirect(true);
    const submitHandler = async (values) => {
      const parsedDate = dayjs(
        values.builtAt,
        ['D/M/YYYY', 'DD/M/YYYY', 'D/MM/YYYY', 'DD/MM/YYYY'],
        true
      );

      osImage.name = values.name;
      osImage.builtAt = parsedDate.toJSON();
      await osImage.update();
      setShouldRedirect(true);
    };

    const osImageForm = (
      <OsImageForm
        initialValues={initialValues}
        onSubmit={submitHandler}
        onCancel={cancelHandler}
        submitLabel="Atualizar"
      />
    );

    return (
      <>
        <Toolbar />
        <Menu />
        <Title title="Editar Imagem" />
        <div className={styles.wrapper}>
          {Object.keys(initialValues).length > 0 ? osImageForm : null}
        </div>
      </>
    );
  }
});

export default EditOsImage;
