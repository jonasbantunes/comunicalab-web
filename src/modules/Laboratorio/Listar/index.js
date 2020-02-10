import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Laboratorio from './components/Laboratorio';
import './styles/index.css';

function Listar() {
  const labs = {
    lab01: {
      id: '01',
      name: 'Laboratorio 01',
      location: 'DCOMP Antigo',
      status: 'Livre',
      capacity: '40',
    },
    lab02: {
      id: '02',
      name: 'Laboratorio 02',
      location: 'DCOMP Antigo',
      status: 'Livre',
      capacity: '20',
    },
  };
  const quantidade = `${Object.keys(labs).length} itens`;

  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Laboratórios" subTitle={quantidade} />
      <div className="listaLaboratorios">
        <Laboratorio key={labs.lab01.id} lab={labs.lab01} />
        <Laboratorio key={labs.lab02.id} lab={labs.lab02} />
      </div>
    </div>
  );
}

export default Listar;
