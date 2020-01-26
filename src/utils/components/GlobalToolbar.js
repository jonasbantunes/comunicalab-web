import React from 'react';
import '../styles/GlobalToolbar.css';
import logo from '../../assets/ComunicaLab.png';
import avatar from '../../assets/User.png';

function GlobalToolbar() {
  return (
    <div className="globaltoolbar">
      <form action="/">
        <a href="/Home">
          <img src={logo} alt="ComunicaLab" />
        </a>
        <div className="globaltoolbarInfoUser">
          <img src={avatar} alt="User" />
          <div className="globaltoolbarInfo">
            <div className="globaltoolbarName">
              <p> EikE Natan </p>
            </div>
            <div className="globaltoolbarRank">
              <p>
                Rank &nbsp;
                <u>1286</u>
              </p>
            </div>
          </div>
          <div className="globaltoolbarSeparador" />
          <button type="submit"> SAIR </button>
        </div>
      </form>
    </div>
  );
}

export default GlobalToolbar;
