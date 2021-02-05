import React from 'react';
import Menu from '../../../shared/components/Menu/Menu';
import Title from '../../../shared/components/Title/Title';
import Toolbar from '../../../shared/components/Toolbar/Toolbar';
import './styles/index.css';

function Visualizar() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Visualizar Laboratório" subTitle="Laboratório 01" />
      <div className="labVisualizar">
        <div className="labVisualizarTitle">
          <h1> Laboratório 01 </h1>
        </div>
        <div className="labVisualizarInfo">
          <div className="labVisualizarData">
            <h1> Status: </h1>
            <h2> Ocupado </h2>
          </div>
          <div className="labVisualizarData">
            <h1> Capacidade: </h1>
            <h2> 40 </h2>
          </div>
          <div className="labVisualizarData">
            <h1> Localização: </h1>
            <h2> DCOMP Antigo </h2>
          </div>
          <div className="labVisualizarData">
            <h1> Chamados: </h1>
            <h2> 2 </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualizar;
