import React from 'react';
import '../styles/GlobalMenu.css';

function GlobalMenu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <p> Laboratório </p>
          <ul>
            <li>
              <a href="/RegistrarLaboratorio"> Registrar </a>
            </li>
            <li>
              <a href="ListarLaboratórios"> Listar Laboratórios </a>
            </li>
          </ul>
        </li>
        <li>
          <p> Equipamento </p>
        </li>
        <li>
          <p> Software </p>
        </li>
        <li>
          <p> Chamados </p>
        </li>
        <li>
          <p> Imagens </p>
        </li>
        <li>
          <p> Usuário </p>
        </li>
      </ul>
    </div>
  );
}

export default GlobalMenu;
