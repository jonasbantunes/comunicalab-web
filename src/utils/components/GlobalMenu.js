import React from 'react';
import '../styles/GlobalMenu.css';

function GlobalMenu() {
  return (
    <div className="GlobalMenu">
      <ul className="menu">
        <li className="submenu">
          <p> Laboratório </p>
          <ul>
            <li className="subsubmenu">
              <a href="/RegistrarLaboratorio"> Registrar </a>
            </li>
            <li className="subsubmenu">
              <a href="/ListarLaboratorio"> Listar Laboratórios </a>
            </li>
          </ul>
        </li>
        <li className="submenu">
          <p> Equipamento </p>
          <ul>
            <li className="subsubmenu">
              <a href="/RegistrarEquipamento"> Registrar</a>
            </li>
            <li className="subsubmenu">
              <a href="/ListarEquipamento"> Listar Equipamentos </a>
            </li>
          </ul>
        </li>
        <li className="submenu">
          <p> Software </p>
        </li>
        <li className="submenu">
          <p> Chamados </p>
        </li>
        <li className="submenu">
          <p> Imagens </p>
        </li>
        <li className="submenu">
          <p> Usuário </p>
        </li>
      </ul>
    </div>
  );
}

export default GlobalMenu;
