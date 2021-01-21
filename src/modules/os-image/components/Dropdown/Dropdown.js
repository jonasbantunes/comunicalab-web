import React from 'react';
import styles from './Dropdown.module.css';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.optionsBtn}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </button>
      <div className={styles.menu}>
        <button className={styles.option} onClick={props.onView}>
          Visualizar
        </button>
        <button className={styles.option} onClick={props.onEdit}>
          Editar
        </button>
        <button className={styles.option} onClick={props.onDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Dropdown;
