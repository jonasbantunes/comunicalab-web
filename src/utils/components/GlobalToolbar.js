import React from 'react';
import '../styles/GlobalToolbar.css';
import logo from '../../assets/ComunicaLab.png';
import avatar from '../../assets/User.png';

function GlobalToolbar() {
  return (
    <div className="containerToolbar">
      <form action="/">
        <a href="/Home">
          <img src={logo} alt="ComunicaLab" />
        </a>
        <div className="infoUser">
          <img src={avatar} alt="User" />
          <div className="info">
            <div className="nameUser">
              <p> EikE Natan </p>
            </div>
            <div className="rankUser">
              <p>
                Rank &nbsp;
                <u>1286</u>
              </p>
            </div>
          </div>
          <div className="separator" />
          <button type="submit"> SAIR </button>
        </div>
      </form>
    </div>
  );
}

export default GlobalToolbar;
