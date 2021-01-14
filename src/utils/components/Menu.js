import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Menu.module.css';

function Menu() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <p className={styles.menuItemName}>Laboratório</p>
        <ul className={styles.dropdown}>
          <li className={styles.dropdownItem}>
            <Link className={styles.dropdownLink} to="/Laboratorio/Registrar">
              Cadastrar
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link className={styles.dropdownLink} to="/Laboratorio/Listar">
              Listar Laboratórios
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.menuItem}>
        <p className={styles.menuItemName}>Equipamento</p>
        <ul className={styles.dropdown}>
          <li className={styles.dropdownItem}>
            <Link className={styles.dropdownLink} to="/Equipamento/Registrar">
              Cadastrar
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link className={styles.dropdownLink} to="/Equipamento/Listar">
              Listar Equipamentos
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.menuItem}>
        <p className={styles.menuItemName}>Software</p>
      </li>
      <li className={styles.menuItem}>
        <p className={styles.menuItemName}>Chamados</p>
      </li>
      <li className={styles.menuItem}>
        <p className={styles.menuItemName}>Imagens</p>
      </li>
      <li className={styles.menuItem}>
        <p className={styles.menuItemName}>Usuário</p>
      </li>
    </ul>
  );
}

export default Menu;
