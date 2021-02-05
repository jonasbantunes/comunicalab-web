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
      <Title title="Visualizar Equipamento" subTitle="Equipamento 01" />
      <div className="equipVisualizar">
        <div className="equipVisualizarTitle">
          <h1> Equipamento 01 </h1>
        </div>
        <div className="equipVisualizarInfo">
          <div className="equipVisualizarData">
            <h1> Status de Uso: </h1>
            <h2> Em uso </h2>
          </div>
          <div className="equipVisualizarData">
            <h1> Status do Equipamento: </h1>
            <h2> Sem Rede </h2>
          </div>
          <div className="equipVisualizarData">
            <h1> Localização: </h1>
            <h2> PC </h2>
          </div>
          <div className="equipVisualizarData">
            <h1> Chamados: </h1>
            <h2> 2 </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualizar;
