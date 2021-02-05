import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/User.png';
import styles from './Toolbar.module.css';
import logoImg from '../../../assets/ComunicaLab.png';

function Toolbar() {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logoLink} to="/Home">
        <img className={styles.logoImg} src={logoImg} alt="ComunicaLab" />
      </Link>

      <div className={styles.spacing}></div>

      <div className={styles.accountWrapper}>
        <img className={styles.accountAvatar} src={avatar} alt="User" />
        <div className={styles.accountInfo}>
          <p className={styles.accountText}>Fulano da Silva</p>
          <p className={styles.accountText}>Rank 1</p>
        </div>
      </div>

      <div className={styles.toolbarSeparator} />
      <button className={styles.logoutBtn}>SAIR</button>
    </div>
  );
}

export default Toolbar;
