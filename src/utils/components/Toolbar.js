import React from 'react';

import '../styles/Toolbar.css';
import logo from '../../assets/ComunicaLab.png';
import avatar from '../../assets/User.png';

function Toolbar() {
  return (
    <div className="toolbar">
      <form action="/">
        <a href="/Home">
          <img src={logo} alt="ComunicaLab" />
        </a>
        <div className="toolbarInfoRank">
          <img src={avatar} alt="User" />
          <div className="toolbarInfo">
            <div className="toolbarName">
              <p> EikE Natan </p>
            </div>
            <div className="toolbarRank">
              <p>
                Rank &nbsp;
                <u>1286</u>
              </p>
            </div>
          </div>
          <div className="toolbarSeparator" />
          <button type="submit"> SAIR </button>
        </div>
      </form>
    </div>
  );
}

export default Toolbar;
