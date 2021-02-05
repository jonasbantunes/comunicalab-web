import React, { useState } from 'react';
import styles from './OsImageListItem.module.css';
import PropsType from 'prop-types';
import dayjs from 'dayjs';
import { Redirect } from 'react-router';
import Dropdown from '../../../../shared/components/Dropdown/Dropdown';
import ModalDelete from '../../../../shared/components/ModalDelete/ModalDelete';

const OsImageListItem = (props) => {
  const [redirectTo, setRedirectTo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  if (redirectTo !== '') {
    return <Redirect to={redirectTo} push />;
  } else {
    const handleDropdownClick = (event) => setAnchorEl(event.currentTarget);
    const handleDropdownClose = () => {
      setAnchorEl(null);
    };

    const handleEdit = () => {
      handleDropdownClose();
      setRedirectTo(`/Imagens/Editar/${props.osImage.id}`);
    };

    const handleDelete = () => {
      handleDropdownClose();
      setShowModal(true);
    };
    const handleDeletionCancel = () => setShowModal(false);
    const handleDeletionConfirm = () => {
      props.osImage.remove();
      setShowModal(false);
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.infoWrapper}>
          <p className={styles.title}>{props.osImage.name}</p>
          <p className={styles.info}>
            <strong>Data de criação: </strong>
            <span>{dayjs(props.osImage.builtAt).format('D/M/YYYY')}</span>
          </p>
        </div>

        <button className={styles.optionsBtn} onClick={handleDropdownClick}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </button>
        <Dropdown
          anchorEl={anchorEl}
          open={anchorEl != null}
          onClose={handleDropdownClose}
          align="left"
        >
          <div className={styles.menu}>
            <button className={styles.option} onClick={handleEdit}>
              Editar
            </button>
            <button className={styles.option} onClick={handleDelete}>
              Excluir
            </button>
          </div>
        </Dropdown>

        <ModalDelete
          title="Excluir Imagem?"
          show={showModal}
          onClose={handleDeletionCancel}
          onConfirm={handleDeletionConfirm}
        >
          Tem certeza que deseja excluir permanentemente esta Imagem?
        </ModalDelete>
      </div>
    );
  }
};

OsImageListItem.propTypes = {
  osImage: PropsType.object.isRequired,
};

export default OsImageListItem;
