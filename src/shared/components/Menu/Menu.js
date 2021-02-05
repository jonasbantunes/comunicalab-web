import React from 'react';
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import MenuDropdownLink from '../MenuDropdownLink/MenuDropdownLink';
import MenuItem from '../MenuItem/MenuItem';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.menu}>
      <MenuDropdown header="Laboratório">
        <MenuDropdownLink to="/Laboratorio/Registrar">
          Cadastrar
        </MenuDropdownLink>
        <MenuDropdownLink to="/Laboratorio/Listar">
          Listar Laboratórios
        </MenuDropdownLink>
      </MenuDropdown>

      <MenuDropdown header="Equipamento">
        <MenuDropdownLink to="/Equipamento/Registrar">
          Cadastrar
        </MenuDropdownLink>
        <MenuDropdownLink to="/Equipamento/Listar">
          Listar Equipamentos
        </MenuDropdownLink>
      </MenuDropdown>

      <MenuItem>Software</MenuItem>
      <MenuItem>Chamados</MenuItem>

      <MenuDropdown header="Imagens">
        <MenuDropdownLink to="/Imagens/Registrar">Cadastrar</MenuDropdownLink>
        <MenuDropdownLink to="/Imagens/Listar">Listar Imagens</MenuDropdownLink>
      </MenuDropdown>

      <MenuItem>Usuário</MenuItem>
    </div>
  );
}

export default Menu;
