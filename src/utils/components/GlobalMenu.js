import React from 'react';
import '../styles/GlobalMenu.css';

function GlobalMenu() {
  return (
    <div className="globalmenu">
      <ul className="globalmenuMenu">
        <li className="globalmenuSubMenu">
          <p> Laboratório </p>
          <ul>
            <li className="globalmenuSubSubMenu">
              <a href="/RegistrarLaboratorio"> Registrar </a>
            </li>
            <li className="globalmenuSubSubMenu">
              <a href="/ListarLaboratorio"> Listar Laboratórios </a>
            </li>
          </ul>
        </li>
        <li className="globalmenuSubMenu">
          <p> Equipamento </p>
          <ul>
            <li className="globalmenuSubSubMenu">
              <a href="/RegistrarEquipamento"> Registrar</a>
            </li>
            <li className="globalmenuSubSubMenu">
              <a href="/ListarEquipamento"> Listar Equipamentos </a>
            </li>
          </ul>
        </li>
        <li className="globalmenuSubMenu">
          <p> Software </p>
        </li>
        <li className="globalmenuSubMenu">
          <p> Chamados </p>
        </li>
        <li className="globalmenuSubMenu">
          <p> Imagens </p>
        </li>
        <li className="globalmenuSubMenu">
          <p> Usuário </p>
        </li>
      </ul>
    </div>
  );
}

export default GlobalMenu;
