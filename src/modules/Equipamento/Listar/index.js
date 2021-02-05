import React from 'react';
import Menu from '../../../shared/components/Menu/Menu';
import Title from '../../../shared/components/Title/Title';
import Toolbar from '../../../shared/components/Toolbar/Toolbar';
import Equip from './components/Equip';
import './styles/index.css';

export default function ListarEquipamento() {
  const equips = {
    equip01: {
      id: '01',
      name: 'Equipamento 1',
      category: 'PC',
      statusUso: 'Em uso',
      statusEquip: 'Sem Rede',
    },
    equip02: {
      id: '02',
      name: 'Equipamento 2',
      category: 'PC',
      statusUso: 'Disponivel',
      statusEquip: 'Problema H.W.',
    },
  };
  const quantidade = `${Object.keys(equips).length} itens`;
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Listar Equipamento" subTitle={quantidade} />
      <div className="listaEquipamentos">
        <Equip key={equips.equip01.id} equip={equips.equip01} />
        <Equip key={equips.equip02.id} equip={equips.equip02} />
      </div>
    </div>
  );
}
