import React from 'react';
import '../styles/GlobalToolbar.css';
import logo from '../../assets/ComunicaLab.png';
import user from '../../assets/User.png';

function GlobalToolbar() {
  return (
    <div className="containerToolbar">
      <img src={logo} className="imagem" alt="ComunicaLab" />
      <div className="grow" />
      <div className="infoUser">
        <img src={user} alt="User" />
        <div className="info">
          <p> Eike Natan Sousa Brito Ferreira Costa </p>
          <p> Rank 1286 </p>
        </div>
        <div className="separator" />
        <button type="submit"> SAIR </button>
      </div>
    </div>
  );
}

export default GlobalToolbar;
